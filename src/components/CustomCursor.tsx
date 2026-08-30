import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let cardX = -100;
    let cardY = -100;
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
      setPosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('article') ||
        target.closest('select') ||
        target.closest('input')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleOver);

    // Physics loop for smooth lagging trailing pill
    const updatePhysics = () => {
      cardX += (mouseX - cardX) * 0.12;
      cardY += (mouseY - cardY) * 0.12;
      setCardPosition({ x: cardX, y: cardY });
      frameId = requestAnimationFrame(updatePhysics);
    };

    frameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isHovering ? 1.4 : 1
          })`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? 'w-10 h-10 border-[#39FF14] bg-[#39FF14]/10 shadow-[0_0_15px_rgba(57,255,20,0.5)]'
              : 'w-8 h-8 border-white/40 bg-transparent'
          }`}
        />
      </div>

      {/* Lagging Glass Pill Card */}
      {!isHovering && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-50 opacity-80"
          style={{
            transform: `translate3d(${cardPosition.x}px, ${cardPosition.y + 26}px, 0) translate(-50%, -50%)`,
          }}
        >
          <div className="px-2.5 py-0.5 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[10px] font-mono-code text-[#39FF14] shadow-lg flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#39FF14]" />
            <span>Gutive Studio</span>
          </div>
        </div>
      )}
    </>
  );
};
