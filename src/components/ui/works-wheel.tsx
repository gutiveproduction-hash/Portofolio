// A portfolio index built as a wheel you turn.
//
// At rest the work sits in a ring around a title, each card tangent to the
// circle. The first notch of scroll blows the ring open into a vertical drum:
// the card at the front lies flat and full size, the ones above and below
// rotate away into hard perspective and run off the top and bottom of the
// frame. Keep turning and the drum carries the next piece round to the front.
//
// The whole thing is one number - `turn` - read by a single rAF pass that writes
// transforms straight to the DOM. 0 is the ring, 1 is the drum with item 0 at
// the front, and every whole number after that is one more item turned past.
import * as React from "react";

import { cn } from "@/lib/utils";

export interface WorksWheelItem {
  /** Project name. Shown beside the front card and in the index. */
  title: string;
  /** Cover art. Any src an <img> takes. Also the alt text's subject when
      `preview` is used instead. */
  image: string;
  /** Live content drawn on the card in place of `image`, e.g. a rendered UI
      preview. It is scaled with the card, so size it to fill its parent. */
  preview?: React.ReactNode;
  /** Where the card links to. Omit for a wheel that only browses. */
  href?: string;
  /** Small line above the front-card title, e.g. the project's role. */
  meta?: string;
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  items: WorksWheelItem[];
  /** Sits in the middle of the ring. @default undefined */
  label?: string;
  /** Label on the card's hover affordance. Omit to drop it. @default undefined */
  action?: string;
  /** Called when the card at the front is clicked. A click on any other card
      turns the wheel to it instead. */
  onSelect?: (index: number) => void;
}

/* Geometry. The card is measured against the stage; everything else is measured
   against the card, so a narrow stage - where the card is capped by width, not
   height - scales the whole wheel down with it instead of leaving a small card
   swinging on a huge drum. The three that matter are tuned together: STEP
   against DRUM sets how hard the neighbours rotate away, and DRUM against LENS
   decides whether they land inside the frame or run off it. */
const CARD_H = 0.38; // front card height, of the stage
const CARD_MAX_W = 0.34; // ... but never wider than this much of the stage
/** A phone-width stage, where the card gets most of the width and the title
    moves under the wheel instead of beside it. */
const NARROW = 640;
const CARD_MAX_W_NARROW = 0.7;
const CARD_RATIO = 1.45; // card width / height
const STEP = 40; // degrees between cards on the drum
const DRUM = 2.22; // drum radius, in card heights - and everything below likewise
const LENS = 2.7; // perspective distance
const RING_R = 1.14; // ring radius
/* The drum alone hangs the work on a plumb line. It isn't one: the strip curves
   away round an arc whose centre sits off to the LEFT, so the piece at the front
   is at the arc's near point - dead centre - and its neighbours have already
   swung back left as well as up and down. BOW is that arc's radius; nothing else
   makes the difference between a stack of cards and a wheel seen side on. */
const BOW = 1.82;
const TITLE = 0.124; // ring label and front-card title
const INDEX = 0.04; // the index down the right-hand side
/** Items either side of the front still worth drawing. Past this a card is
    edge-on, and further round it would stack up on the vanishing point. */
const CULL = 1.6;

/** How much of a wheel-notch or a dragged pixel counts as one item. */
const WHEEL_UNITS = 900;
const DRAG_UNITS = 420;
/** Pixels a pointer has to travel before a press counts as a drag, not a click. */
const DRAG_SLOP = 5;
/** Quiet time after the last wheel event before the wheel settles on an item. */
const SETTLE = 140;
/** Least a wheel gesture has to turn, in items, to carry on to the next one. */
const SETTLE_MIN = 0.1;
/** Fraction of the remaining distance closed each frame. 1 = no smoothing. */
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Stage = { w: number; h: number };

const rad = (deg: number) => (deg * Math.PI) / 180;

/** How far left the arc has carried something that has turned `drumDeg` off the
    front. Zero at the front, so the piece being read stays centred. */
const bowAt = (drumDeg: number, bow: number) =>
  -bow * (1 - Math.cos(rad(drumDeg)));

/** Both states in one chain: the ring terms fall away as `m` reaches the drum,
    and the drum terms are still zero while the ring is up. The bow is applied
    first, in the wheel's own plane, so it slides the card sideways rather than
    turning with it - and perspective still shrinks it with distance. */
function place(
  ringDeg: number,
  drumDeg: number,
  ringR: number,
  drumR: number,
  bow: number,
  m: number,
) {
  return (
    `translateX(${m * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px)` +
    ` rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`
  );
}

export function WorksWheel({
  items,
  label = "Works '26",
  action = "View",
  onSelect,
  className,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLElement | null)[]>([]);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  // The wheel's position, and where it is heading. Only `active` is state -
  // everything else is written to the DOM, so turning the wheel is not a render.
  const turn = React.useRef(0);
  const target = React.useRef(0);
  const [active, setActive] = React.useState(0);
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 });

  const count = items.length;
  const last = Math.max(count - 1, 0);

  // Read after mount, not during render: the server has no matchMedia, and
  // branching on it inline is a hydration mismatch. Reduced motion drops the
  // easing, so the wheel lands where it is put instead of gliding there.
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const metrics = React.useMemo(() => {
    const { w, h } = stage;
    const narrow = w < NARROW;
    const cardW = Math.min(
      h * CARD_H * CARD_RATIO,
      w * (narrow ? CARD_MAX_W_NARROW : CARD_MAX_W),
    );
    const cardH = cardW / CARD_RATIO;
    const drumR = cardH * DRUM;
    // The phone card is sized for the drum; the ring built off it would run
    // past the sides, so the ring keeps to the stage instead.
    const ringR = Math.min(cardH * RING_R, narrow ? w * 0.34 : Infinity);
    // Shrink the ring's cards until the circle reads as a closed loop rather
    // than beads on a wire, however many pieces the wheel is given.
    const ringScale = count
      ? clamp((((2 * Math.PI * ringR) / count) * 0.82) / (cardW || 1), 0.16, 1)
      : 1;
    return {
      cardW,
      cardH,
      ringR,
      ringScale,
      drumR,
      bow: cardH * BOW,
      depth: cardH * LENS,
      title: cardH * TITLE,
      index: Math.max(cardH * INDEX, 11),
      narrow,
    };
  }, [stage, count]);

  // One pass per frame: ease toward the target, then write every transform.
  React.useEffect(() => {
    if (!stage.h) return;
    let frame = 0;
    const { ringR, ringScale, drumR, bow } = metrics;

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) turn.current = target.current;
      else turn.current += gap * (reduced ? 1 : EASE);

      const t = turn.current;
      const m = clamp(t, 0, 1);
      const pos = Math.max(0, t - 1);

      // The drum is pulled back so its front face lands on the picture plane.
      // That set-back has to arrive with the drum, or the ring would sit at the
      // far side of the perspective and render at half its size.
      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateZ(${-m * drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs.current[i];
        if (card) {
          card.style.transform = place(
            d * (360 / count),
            drumDeg,
            ringR,
            drumR,
            bow,
            m,
          );
          // Culled by distance, not by angle: at a full turn the far side comes
          // back round to face us, and everything past the neighbours lands on
          // the vanishing point in a heap.
          card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? "0" : "1";
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));
        }
        const face = card?.firstElementChild as HTMLElement | null;
        if (face) face.style.transform = `scale(${lerp(ringScale, 1, m)})`;
      }

      if (labelRef.current) labelRef.current.style.opacity = String(1 - m);
      if (titleRef.current) titleRef.current.style.opacity = String(m);
      const near = clamp(Math.round(pos), 0, last);
      setActive((prev) => (prev === near ? prev : near));
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [metrics, stage.h, count, last, reduced]);

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last + 1);
    },
    [last],
  );

  // Where the press started and where it was last seen. The stage only captures
  // the pointer once it has moved past DRAG_SLOP: capturing on press would
  // retarget the click to the stage, and the card under it would never hear it.
  const drag = React.useRef<{
    x: number;
    y: number;
    x0: number;
    y0: number;
    moved: boolean;
  } | null>(null);
  const dragged = React.useRef(false);
  const settling = React.useRef(0);

  const pick = (i: number) => {
    if (target.current >= 1 && Math.round(target.current) === i + 1) {
      onSelect?.(i);
      return true;
    }
    to(i + 1);
    return false;
  };

  // Native listener, because the wheel has to be cancellable - and it only
  // cancels while it still has somewhere to go, so the page scrolls on at
  // either end instead of trapping the reader.
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    // Where the wheel stood when the current gesture began.
    let origin: number | null = null;
    const onWheel = (event: WheelEvent) => {
      const next = target.current + event.deltaY / WHEEL_UNITS;
      if (next > 0 && next < last + 1) event.preventDefault();
      origin ??= Math.round(target.current);
      to(next);
      // A wheel gesture arrives as a burst of events with no end of its own, so
      // the rest position is whatever notch it happened to stop on. Left there
      // the drum sits between two cards - nothing at the front, and the pair
      // either side of the gap both turned half away. Settle onto an item -
      // and settle forward: a mouse notch is a small fraction of an item, so
      // rounding to the nearest would pull a short scroll straight back.
      window.clearTimeout(settling.current);
      settling.current = window.setTimeout(() => {
        const from = origin ?? 0;
        const moved = target.current - from;
        origin = null;
        if (Math.abs(moved) < SETTLE_MIN) to(from);
        else
          to(from + Math.sign(moved) * Math.max(1, Math.round(Math.abs(moved))));
      }, SETTLE);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.clearTimeout(settling.current);
    };
  }, [to, last]);

  return (
    <section
      aria-label={label}
      className={cn(
        "bg-background text-foreground relative h-full min-h-[24rem] w-full overflow-hidden select-none",
        className,
      )}
      {...props}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${active}`}
        // pan-y, not pan-x: a vertical swipe on a touch screen has to stay the
        // page's, or a wheel this tall would trap the reader. Touch turns the
        // wheel with a sideways swipe instead; a mouse drags up and down.
        className="focus-visible:outline-foreground absolute inset-0 cursor-grab touch-pan-y outline-none focus-visible:outline-2 focus-visible:-outline-offset-4 active:cursor-grabbing"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => {
          const { clientX: x, clientY: y } = event;
          drag.current = { x, y, x0: x, y0: y, moved: false };
          dragged.current = false;
        }}
        onPointerMove={(event) => {
          const d = drag.current;
          if (!d) return;
          const { clientX: x, clientY: y } = event;
          if (!d.moved) {
            if (Math.hypot(x - d.x0, y - d.y0) < DRAG_SLOP) return;
            d.moved = true;
            dragged.current = true;
            event.currentTarget.setPointerCapture(event.pointerId);
          }
          to(target.current + (d.y - y + (d.x - x)) / DRAG_UNITS);
          d.x = x;
          d.y = y;
        }}
        onPointerUp={() => {
          // Land on an item rather than between two.
          const moved = drag.current?.moved;
          drag.current = null;
          if (moved && target.current > 1) to(Math.round(target.current));
        }}
        onPointerCancel={() => {
          drag.current = null;
          if (target.current > 1) to(Math.round(target.current));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") to(Math.round(target.current) + 1);
          else if (event.key === "ArrowUp") to(Math.round(target.current) - 1);
          else if (event.key === "Enter" && target.current >= 1)
            pick(Math.round(target.current) - 1);
          else return;
          event.preventDefault();
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, i) => {
            const Tag = (item.href ? "a" : "div") as "a";
            return (
              <React.Fragment key={item.title}>
                <Tag
                  id={`works-wheel-${i}`}
                  role="option"
                  aria-selected={i === active}
                  href={item.href}
                  ref={(node: HTMLElement | null) => {
                    cardRefs.current[i] = node;
                  }}
                  onClick={(event: React.MouseEvent) => {
                    // A drag that ends over a card is not a click on it.
                    if (dragged.current) {
                      event.preventDefault();
                      return;
                    }
                    // Only the front card follows its link; any other card is
                    // turned to first.
                    if (!pick(i) || !item.href) event.preventDefault();
                  }}
                  className="group absolute [backface-visibility:hidden]"
                  style={{
                    width: metrics.cardW,
                    height: metrics.cardH,
                    marginLeft: -metrics.cardW / 2,
                    marginTop: -metrics.cardH / 2,
                  }}
                >
                  <span className="bg-muted shadow-foreground/12 relative block size-full overflow-hidden rounded-lg shadow-[0_18px_40px_-18px_var(--tw-shadow-color)]">
                    {item.preview ? (
                      <span
                        className="pointer-events-none block size-full"
                        aria-label={item.title}
                        role="img"
                      >
                        {item.preview}
                      </span>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        draggable={false}
                        className="size-full object-cover object-top"
                      />
                    )}
                    {action && (item.href || onSelect) && i === active ? (
                      <span className="bg-background/80 text-foreground pointer-events-none absolute right-3 bottom-3 flex translate-y-1 items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] opacity-0 backdrop-blur-sm transition group-hover:translate-y-0 group-hover:opacity-100">
                        <svg
                          viewBox="0 0 12 12"
                          className="size-2.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9 9 3M4 3h5v5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {action}
                      </span>
                    ) : null}
                  </span>
                </Tag>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Ring title and front-card title trade places across the transition.
          Type is sized off the measured stage, not vh, so the wheel keeps its
          proportions inside a card as well as at full bleed. */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 grid place-items-center tracking-tight"
        style={{ fontSize: metrics.title }}
      >
        {label}
      </div>
      <div
        ref={titleRef}
        className={cn(
          "pointer-events-none absolute leading-[1.05] tracking-tight opacity-0",
          metrics.narrow
            ? "right-[6%] bottom-[6%] left-[6%]"
            : "top-1/2 left-[8%] -translate-y-1/2",
        )}
        style={{
          fontSize: metrics.narrow ? metrics.title * 1.4 : metrics.title,
          // Wrap before the title runs into the front card.
          maxWidth: metrics.narrow
            ? undefined
            : Math.max(0, stage.w * 0.42 - metrics.cardW / 2 - metrics.title),
        }}
      >
        {items[active]?.meta ? (
          <div className="text-muted-foreground mb-[0.6em] font-sans text-[max(0.28em,10px)] tracking-[0.18em] uppercase">
            {items[active].meta}
          </div>
        ) : null}
        {items[active]?.title}
      </div>

      <ol
        className={cn(
          "text-muted-foreground absolute top-[7.5%] right-[2.5%] text-right leading-[1.75]",
          // Too small to read or tap on a phone; swiping and tapping the
          // cards cover it there.
          metrics.narrow && "hidden",
        )}
        style={{ fontSize: metrics.index }}
      >
        {items.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => to(i + 1)}
              className={cn(
                "focus-visible:outline-foreground cursor-pointer transition-colors outline-none focus-visible:outline-1",
                i === active && "text-foreground font-medium",
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default WorksWheel;
