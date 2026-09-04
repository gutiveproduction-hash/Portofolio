import React, { useRef, useEffect, useState } from 'react';
import { TechVideo } from '../types';
import { TECH_VIDEOS } from '../data/portfolioData';
import { Eye, EyeOff, Sliders, Terminal } from 'lucide-react';

interface TechVideoBackdropProps {
  activeVideoId: string;
  onSelectVideo: (video: TechVideo) => void;
  showControls?: boolean;
}

export const TechVideoBackdrop: React.FC<TechVideoBackdropProps> = ({
  activeVideoId,
  onSelectVideo,
  showControls = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimmerLevel, setDimmerLevel] = useState<number>(0.35); // 0.15 (bright) to 0.70 (dim)
  const [showScanlines, setShowScanlines] = useState<boolean>(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const activeVideo = TECH_VIDEOS.find(v => v.id === activeVideoId) || TECH_VIDEOS[0];

  // High-Performance 60FPS Cyber Canvas Engine
  // Renders 4 distinct procedural futuristic visualizations:
  // 1. Cyber Circuit & Moving Electrons (Matrix)
  // 2. 3D Perspective Hyperspace Neon Tunnel
  // 3. Matrix Digital Code Stream
  // 4. Neural Constellation Cluster
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mode-specific entities
    let tick = 0;

    // --- Entity 1: Circuit Lines & Logic Nodes ---
    const circuitLines: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
      progress: number;
      speed: number;
      color: string;
      width: number;
    }> = [];

    for (let i = 0; i < 35; i++) {
      circuitLines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: Math.random() > 0.5 ? (Math.random() > 0.5 ? 1 : -1) : 0,
        dy: Math.random() > 0.5 ? (Math.random() > 0.5 ? 1 : -1) : 0,
        length: Math.random() * 180 + 80,
        progress: Math.random(),
        speed: Math.random() * 0.008 + 0.003,
        color: Math.random() > 0.3 ? '#39FF14' : '#00F0FF',
        width: Math.random() * 1.5 + 0.75
      });
    }

    // --- Entity 2: Matrix Falling Glyphs ---
    const matrixChars = '010101<>/{}=+*#_GUTIVE.CO_REACT_GO_AI_SUPABASE_ELECTRON_';
    const matrixColumns = Math.floor(width / 24);
    const matrixDrops: number[] = [];
    for (let i = 0; i < matrixColumns; i++) {
      matrixDrops[i] = Math.floor(Math.random() * -50);
    }

    // --- Entity 3: Tunnel Polygons ---
    const tunnelRings = 12;

    // --- Entity 4: Neural Nodes ---
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 55);
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string }> = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        color: Math.random() > 0.4 ? '#39FF14' : '#00F0FF'
      });
    }

    const render = () => {
      tick++;

      // Base clear with subtle persistence for motion glow
      ctx.fillStyle = 'rgba(0, 4, 2, 0.28)';
      ctx.fillRect(0, 0, width, height);

      const isTunnel = activeVideo.id.includes('tunnel');
      const isMatrix = activeVideo.id.includes('matrix') || activeVideo.id.includes('code');
      const isAnalytics = activeVideo.id.includes('charts') || activeVideo.id.includes('analytics');

      // --- VISUAL SCENE A: Hyperspace Quantum Tunnel ---
      if (isTunnel) {
        const cx = width / 2;
        const cy = height / 2;

        for (let i = 0; i < tunnelRings; i++) {
          const depth = (i + (tick * 0.015)) % tunnelRings;
          const radius = Math.pow(depth / tunnelRings, 2.5) * (Math.max(width, height) * 0.85);
          const alpha = Math.sin((depth / tunnelRings) * Math.PI) * 0.75;

          if (radius > 5) {
            ctx.beginPath();
            // Octagonal wireframe
            for (let a = 0; a < 8; a++) {
              const angle = (a / 8) * Math.PI * 2 + (tick * 0.002);
              const px = cx + Math.cos(angle) * radius;
              const py = cy + Math.sin(angle) * radius;
              if (a === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Radiating spoke beams
            for (let a = 0; a < 8; a++) {
              const angle = (a / 8) * Math.PI * 2 + (tick * 0.002);
              ctx.beginPath();
              ctx.moveTo(cx, cy);
              ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
              ctx.strokeStyle = `rgba(57, 255, 20, ${alpha * 0.4})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }
      // --- VISUAL SCENE B: Digital Matrix Rain & Telemetry Stream ---
      else if (isMatrix) {
        ctx.font = '12px "JetBrains Mono", monospace';
        for (let i = 0; i < matrixDrops.length; i++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const x = i * 24;
          const y = matrixDrops[i] * 20;

          // Leading bright glyph
          ctx.fillStyle = '#ffffff';
          ctx.fillText(char, x, y);

          // Glowing trail
          ctx.fillStyle = 'rgba(57, 255, 20, 0.75)';
          ctx.fillText(char, x, y - 20);

          if (y > height && Math.random() > 0.975) {
            matrixDrops[i] = 0;
          }
          matrixDrops[i]++;
        }
      }
      // --- VISUAL SCENE C: Cyber Circuit Matrix & Neon Energy Highway ---
      else {
        // 1. Draw glowing grid lines
        const gridSize = 64;
        ctx.strokeStyle = 'rgba(57, 255, 20, 0.07)';
        ctx.lineWidth = 1;

        for (let x = (tick * 0.3) % gridSize; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        for (let y = (tick * 0.3) % gridSize; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // 2. Draw active circuit pulses & electrons
        for (const line of circuitLines) {
          line.progress += line.speed;
          if (line.progress > 1) {
            line.progress = 0;
            line.x = Math.random() * width;
            line.y = Math.random() * height;
            // Snap to grid
            line.x = Math.floor(line.x / 64) * 64;
            line.y = Math.floor(line.y / 64) * 64;
          }

          const currentX = line.x + line.dx * (line.length * line.progress);
          const currentY = line.y + line.dy * (line.length * line.progress);

          // Circuit track
          ctx.beginPath();
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(currentX, currentY);
          ctx.strokeStyle = line.color === '#39FF14' ? 'rgba(57, 255, 20, 0.35)' : 'rgba(0, 240, 255, 0.35)';
          ctx.lineWidth = line.width;
          ctx.stroke();

          // Electron packet head (glowing bright spot)
          ctx.beginPath();
          ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = line.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Corner node terminal
          ctx.beginPath();
          ctx.arc(line.x, line.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = line.color;
          ctx.fill();
        }

        // 3. Connect neural nodes
        for (let i = 0; i < nodes.length; i++) {
          const n1 = nodes[i];
          n1.x += n1.vx;
          n1.y += n1.vy;

          if (n1.x < 0 || n1.x > width) n1.vx *= -1;
          if (n1.y < 0 || n1.y > height) n1.vy *= -1;

          ctx.beginPath();
          ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
          ctx.fillStyle = n1.color;
          ctx.fill();

          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              const alpha = (1 - dist / 120) * 0.3;
              ctx.strokeStyle = `rgba(57, 255, 20, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeVideo]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {/* Cyber Canvas Engine — runs at 60FPS, fully self-contained (no external video dependency) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-90"
      />

      {/* Futuristic CRT Scanline Mesh */}
      {showScanlines && (
        <div className="cyber-scanlines absolute inset-0 w-full h-full opacity-25 pointer-events-none" />
      )}

      {/* Adjustable Neon Dimmer Overlay (Vibrant default, high contrast readability) */}
      <div
        className="absolute inset-0 transition-colors duration-500 pointer-events-none"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${dimmerLevel})`,
          backgroundImage: 'radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 75%, #000000 100%)'
        }}
      />

      {/* Top Header Subtle Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Bottom Section Blend Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

      {/* Tech Controls Floating HUD Pill (Top Right, under navbar) */}
      {showControls && (
        <div className="absolute top-20 right-4 sm:right-8 z-30 pointer-events-auto flex items-center gap-2">
          {/* Main Quick Trigger Pill */}
          <div className="relative">
            <button
              id="tech-video-hud-btn"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black text-xs font-mono-code text-white/90 hover:text-white border border-[#39FF14]/50 hover:border-[#39FF14] backdrop-blur-xl flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(57,255,20,0.15)] cursor-pointer"
              title="Cyber Canvas Controls"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-neon-pulse" />
              <span className="text-white/60 hidden sm:inline">SCENE:</span>
              <span className="text-[#39FF14] font-bold max-w-[130px] truncate">{activeVideo.title}</span>
              <Sliders size={13} className="text-[#39FF14] ml-1" />
            </button>

            {/* Expanded HUD Settings Panel */}
            {isSettingsOpen && (
              <div
                id="tech-video-hud-panel"
                className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-[#0a0a0a]/95 border border-[#39FF14]/40 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-white">
                    <Terminal size={14} className="text-[#39FF14]" />
                    <span className="font-bold">CYBER ENGINE HUD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
                    <span className="text-[10px] font-mono-code text-[#39FF14] font-bold">60 FPS LIVE</span>
                  </div>
                </div>

                {/* 1. Scene Switcher Buttons */}
                <div className="space-y-2 mb-4">
                  <label className="text-[11px] font-mono-code text-white/70 uppercase tracking-wider block">
                    Select Visual Scene:
                  </label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {TECH_VIDEOS.map(v => (
                      <button
                        key={v.id}
                        onClick={() => {
                          onSelectVideo(v);
                        }}
                        className={`w-full px-3 py-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                          activeVideo.id === v.id
                            ? 'bg-[#39FF14]/20 text-white border border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.2)] font-bold'
                            : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: v.themeColor }} />
                            {v.title}
                          </span>
                          <span className="text-[10px] text-white/50">{v.subtitle}</span>
                        </div>
                        <span className="text-[10px] font-mono-code text-[#39FF14]">
                          {activeVideo.id === v.id ? 'ACTIVE' : 'SELECT'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Dimmer Slider (Brightness/Darkness Control) */}
                <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-white/70">Background Dimmer:</span>
                    <span className="text-[#39FF14] font-bold">{Math.round((1 - dimmerLevel) * 100)}% Glow</span>
                  </div>
                  <input
                    type="range"
                    min="0.10"
                    max="0.75"
                    step="0.05"
                    value={dimmerLevel}
                    onChange={(e) => setDimmerLevel(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#39FF14]"
                  />
                  <div className="flex justify-between text-[10px] font-mono-code text-white/40">
                    <span>Bright Neon</span>
                    <span>Subtle Dark</span>
                  </div>
                </div>

                {/* 3. Toggles */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => setShowScanlines(!showScanlines)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono-code transition flex items-center justify-center gap-1.5 border cursor-pointer ${
                      showScanlines
                        ? 'bg-[#39FF14]/15 border-[#39FF14]/50 text-[#39FF14]'
                        : 'bg-white/5 border-white/10 text-white/50'
                    }`}
                  >
                    {showScanlines ? <Eye size={12} /> : <EyeOff size={12} />}
                    <span>CRT Scanlines</span>
                  </button>

                  <div
                    className="px-3 py-2 rounded-xl text-xs font-mono-code flex items-center justify-center gap-1.5 border bg-[#39FF14]/10 border-[#39FF14]/40 text-[#39FF14]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                    <span>Canvas Engine Live</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
