import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { 
  Smartphone, 
  RotateCw, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Key, 
  Send, 
  Bot, 
  User, 
  FileText, 
  Check, 
  CheckCircle, 
  AlertCircle, 
  Camera, 
  DollarSign, 
  Activity, 
  Sparkles, 
  Wifi, 
  RefreshCw,
  Sliders,
  BarChart3,
  Lock,
  Clock
} from 'lucide-react';

interface ProjectPreviewMockupProps {
  project: Project;
  interactive?: boolean;
  compact?: boolean;
}

export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({
  project,
  interactive = true,
  compact = false
}) => {
  // 1. Goed Service (3D Web & Repair Booking) State
  const [selectedPart, setSelectedPart] = useState<'screen' | 'battery' | 'camera' | 'housing'>('screen');
  const [phoneAngle, setPhoneAngle] = useState<number>(0);
  const [modelViewMode, setModelViewMode] = useState<'assembled' | 'exploded'>('assembled');

  // 2. Goed Acsess (POS & Face Attendance) State
  const [activeAttendanceState, setActiveAttendanceState] = useState<'scanning' | 'verified'>('verified');
  const [cartItems, setCartItems] = useState([
    { name: 'OLED iPhone 14 Pro', price: 1850000, qty: 1 },
    { name: 'Baterai High-Cap 3200mAh', price: 450000, qty: 1 }
  ]);

  // 3. PLN E-Procurement State
  const [docSequence, setDocSequence] = useState<number>(42);
  const [docCategory, setDocCategory] = useState<'RFP' | 'TENDER' | 'BAST'>('RFP');
  const [copiedDoc, setCopiedDoc] = useState(false);

  // 4. Amanah Cryptographic Consent State
  const [isKeyGenerated, setIsKeyGenerated] = useState(true);
  const [consentActive, setConsentActive] = useState(true);
  const [simulatedSignature, setSimulatedSignature] = useState('0x7f9a...3b21c4');

  // 5. WhatsApp AI Bot State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'user', text: 'Halo Mas, mau tanya pricelist pembuatan aplikasi POS multi-cabang berapa ya?', time: '10:42' },
    { sender: 'bot', text: 'Halo kak! Untuk POS multi-cabang (lengkap dengan real-time inventory Supabase & face-recognition absensi), estimasi mulai dari Rp 15-25jt tergantung modul hardware thermal print yang diinginkan. Boleh tahu ada berapa cabang kak?', time: '10:42' }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // 6. SehatLansia State
  const [elderlyMode, setElderlyMode] = useState(true);
  const [speechActive, setSpeechActive] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'Semua' | 'Pagi' | 'Siang' | 'Sore' | 'Malam'>('Semua');
  const [meds, setMeds] = useState([
    { id: '1', name: 'Amlodipine', tag: 'Hipertensi', dose: '1 Tablet (5 mg)', timing: 'Pagi', rule: 'Sesudah Makan', taken: false },
    { id: '2', name: 'Vitamin D3 1000 IU', tag: 'Vitamin & Suplemen', dose: '1 Tablet Kunyah', timing: 'Pagi', rule: 'Bersama Makanan', taken: false },
    { id: '3', name: 'Metformin 500mg', tag: 'Gula Darah', dose: '1 Tablet', timing: 'Siang', rule: 'Saat Makan', taken: false },
    { id: '4', name: 'Simvastatin 20mg', tag: 'Kolesterol', dose: '1 Tablet', timing: 'Malam', rule: 'Sebelum Tidur', taken: false }
  ]);
  const [aiMealPhoto, setAiMealPhoto] = useState<{ detected: boolean; name: string; notes: string; safeForElderly: boolean } | null>(null);

  const toggleMedTaken = (id: string) => {
    setMeds(prev => prev.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  const handleSpeak = (text: string) => {
    setSpeechActive(text);
    setTimeout(() => {
      setSpeechActive(null);
    }, 2800);
  };

  const handleSendChat = (presetText?: string) => {
    const textToSend = presetText || inputMsg;
    if (!textToSend.trim()) return;

    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = { sender: 'user' as const, text: textToSend, time: timeNow };
    setChatMessages(prev => [...prev, newMsg]);
    if (!presetText) setInputMsg('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = 'Siap kak! Kami bisa jadwalkan sesi technical discovery gratis untuk bedah arsitektur sistem dan estimasi timeline.';
      const lower = textToSend.toLowerCase();
      if (lower.includes('face') || lower.includes('absensi') || lower.includes('biometric')) {
        botResponse = 'Sistem face recognition kami menggunakan face-api.js on-device dengan anti-spoofing liveness check, akurasi 99.4% tanpa server latency!';
      } else if (lower.includes('3d') || lower.includes('web3d') || lower.includes('three')) {
        botResponse = 'Untuk Web3D kami optimasi polygon via Google <model-viewer> & Three.js/GSAP, rendering 60fps mulus di semua mobile browser.';
      } else if (lower.includes('whatsapp') || lower.includes('bot') || lower.includes('ai')) {
        botResponse = 'Bot WhatsApp kami dilengkapi Training Ground UI khusus untuk kalibrasi gaya bahasa owner menggunakan Claude AI reasoning engine.';
      } else if (lower.includes('pln') || lower.includes('procurement') || lower.includes('enterprise')) {
        botResponse = 'Untuk enterprise system, kami sediakan automated document numbering, audit trail ISO, dan dashboard analitik interaktif.';
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setIsTyping(false);
    }, 900);
  };

  // Switch based on project.id
  if (project.id === 'goed-service') {
    const partPrices = {
      screen: { name: 'Super Retina XDR OLED', price: 'Rp 1.850.000', warranty: 'Garansi 6 Bulan', health: 'Grade Original' },
      battery: { name: 'High-Density 3800mAh Battery', price: 'Rp 550.000', warranty: 'Garansi 12 Bulan', health: '100% Health' },
      camera: { name: 'Triple Lens Sensor Array', price: 'Rp 1.200.000', warranty: 'Garansi 3 Bulan', health: 'OEM Certified' },
      housing: { name: 'Aerospace Titanium Frame', price: 'Rp 1.450.000', warranty: 'Garansi Fisik', health: 'Precision CNC' }
    };

    return (
      <div className={`w-full bg-[#0a0f0d] rounded-2xl border border-[#39FF14]/30 overflow-hidden flex flex-col ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
        {/* Top Mini Toolbar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-mono-code">
          <div className="flex items-center gap-2 text-[#39FF14]">
            <Smartphone size={14} />
            <span>3D PRODUCT VISUALIZER & REPAIR ESTIMATOR</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#39FF14]/15 text-[#39FF14] text-[10px] border border-[#39FF14]/30">
            WebGL 60FPS
          </span>
        </div>

        {/* Interactive 3D Canvas Mockup Box */}
        <div className="relative aspect-[16/9] rounded-xl bg-gradient-to-br from-[#06140d] via-[#020905] to-[#0a1f14] border border-white/10 flex items-center justify-center overflow-hidden group">
          {/* Grid lines background */}
          <div className="absolute inset-0 bg-[radial-gradient(#39FF14_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          
          {/* Simulated 3D Phone Rendering */}
          <div 
            className="relative transition-transform duration-700 ease-out flex flex-col items-center justify-center"
            style={{ transform: `rotateY(${phoneAngle}deg) ${modelViewMode === 'exploded' ? 'scale(1.08)' : 'scale(1)'}` }}
          >
            {/* Phone Outer Chassis */}
            <div className="relative w-28 sm:w-36 h-52 sm:h-64 rounded-[28px] border-4 border-neutral-700 bg-black/90 shadow-2xl flex flex-col items-center justify-between p-2.5 overflow-hidden transition-all">
              {/* Dynamic Island / Notch */}
              <div className="w-12 h-3.5 bg-black rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
              </div>

              {/* Internal Component Highlight Overlay */}
              {modelViewMode === 'exploded' ? (
                <div className="w-full h-full my-auto flex flex-col items-center justify-center gap-1.5 text-center animate-in zoom-in-95 duration-300">
                  <div className={`w-full py-1 px-1.5 rounded text-[9px] font-mono-code border transition-all ${selectedPart === 'screen' ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]' : 'bg-white/5 border-white/10 text-white/60'}`}>
                    [1] OLED Glass Panel
                  </div>
                  <div className={`w-full py-1 px-1.5 rounded text-[9px] font-mono-code border transition-all ${selectedPart === 'battery' ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]' : 'bg-white/5 border-white/10 text-white/60'}`}>
                    [2] Li-Ion Battery Core
                  </div>
                  <div className={`w-full py-1 px-1.5 rounded text-[9px] font-mono-code border transition-all ${selectedPart === 'camera' ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]' : 'bg-white/5 border-white/10 text-white/60'}`}>
                    [3] LiDAR Sensor Array
                  </div>
                  <div className={`w-full py-1 px-1.5 rounded text-[9px] font-mono-code border transition-all ${selectedPart === 'housing' ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]' : 'bg-white/5 border-white/10 text-white/60'}`}>
                    [4] Titanium Chassis
                  </div>
                </div>
              ) : (
                <div className="w-full h-36 rounded-xl bg-gradient-to-tr from-[#39FF14]/20 to-cyan-500/10 border border-[#39FF14]/40 flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-[11px] font-bold text-white font-mono-code">Goed Service</span>
                  <span className="text-[9px] text-[#39FF14] mt-0.5">Diagnosa Otomatis</span>
                  <div className="mt-2 w-16 h-1 rounded-full bg-[#39FF14]/40 overflow-hidden">
                    <div className="w-full h-full bg-[#39FF14] animate-pulse" />
                  </div>
                </div>
              )}

              {/* Bottom Speaker grill */}
              <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="w-1 h-1 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          {/* Interactive 3D Controls Floating Pills */}
          {interactive && (
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPhoneAngle(prev => (prev + 90) % 360);
                }}
                className="px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black text-[10px] font-mono-code text-white/90 border border-white/20 hover:border-[#39FF14] flex items-center gap-1 transition"
              >
                <RotateCw size={11} className="text-[#39FF14]" /> Rotate ({phoneAngle}°)
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModelViewMode(prev => prev === 'assembled' ? 'exploded' : 'assembled');
                }}
                className="px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black text-[10px] font-mono-code text-[#39FF14] border border-[#39FF14]/40 flex items-center gap-1 transition"
              >
                <Layers size={11} /> {modelViewMode === 'assembled' ? 'Exploded View' : 'Assembled View'}
              </button>
            </div>
          )}
        </div>

        {/* Part Selector & Instant Quote Widget */}
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-left">
          {(['screen', 'battery', 'camera', 'housing'] as const).map((partKey) => (
            <button
              key={partKey}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPart(partKey);
              }}
              className={`p-2 rounded-xl text-left transition border cursor-pointer ${
                selectedPart === partKey
                  ? 'bg-[#39FF14]/15 border-[#39FF14] text-white shadow-sm'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/70'
              }`}
            >
              <div className="text-[10px] font-mono-code uppercase text-white/50">{partKey}</div>
              <div className="text-xs font-semibold text-white truncate">{partPrices[partKey].name.split(' ')[0]}</div>
              <div className="text-[11px] text-[#39FF14] font-mono-code font-bold mt-0.5">{partPrices[partKey].price}</div>
            </button>
          ))}
        </div>

        {/* Selected Part Specs Bar */}
        <div className="mt-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-white/70">
            Komponen: <strong className="text-white">{partPrices[selectedPart].name}</strong> ({partPrices[selectedPart].health})
          </span>
          <span className="text-[#39FF14] font-mono-code">{partPrices[selectedPart].warranty}</span>
        </div>
      </div>
    );
  }

  // 2. Goed Acsess (POS & Face Biometric System)
  if (project.id === 'goed-acsess') {
    return (
      <div className={`w-full bg-[#0b0c14] rounded-2xl border border-blue-500/30 overflow-hidden flex flex-col ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-mono-code">
          <div className="flex items-center gap-2 text-blue-400">
            <Cpu size={14} />
            <span>CROSS-PLATFORM POS & BIOMETRIC DASHBOARD</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[10px] border border-blue-500/30">
            Supabase Sync • 14ms
          </span>
        </div>

        {/* Split Grid: Live POS Ticket + Biometric Face Scanner */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Left: Biometric Face-ID Attendance Module (5 Cols) */}
          <div className="sm:col-span-5 rounded-xl bg-black/60 border border-white/10 p-3 flex flex-col items-center justify-between relative overflow-hidden">
            <div className="w-full flex items-center justify-between text-[10px] font-mono-code text-white/50 mb-2">
              <span className="flex items-center gap-1 text-blue-400"><Camera size={11} /> Face-API.js</span>
              <span className="text-[#39FF14]">Anti-Spoof ON</span>
            </div>

            {/* Simulated Camera Viewfinder with scanning laser */}
            <div className="relative w-full aspect-square rounded-lg bg-neutral-950 border border-blue-500/40 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-2 border-2 border-dashed border-blue-400/40 rounded-lg" />
              
              {/* Scanline Laser */}
              <div className="absolute inset-x-0 h-0.5 bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-pulse" style={{ top: '45%' }} />

              {/* Facial Avatar Wireframe */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full border-2 border-blue-400 bg-blue-500/10 flex items-center justify-center">
                  <User size={28} className="text-blue-300" />
                </div>
                <span className="text-[10px] font-mono-code text-white font-semibold mt-1.5">Teknisi: Budi S.</span>
                <span className="text-[9px] font-mono-code text-[#39FF14] flex items-center gap-0.5">
                  <CheckCircle size={9} /> Match: 99.4%
                </span>
              </div>
            </div>

            {/* Attendance Clock In Status */}
            <div className="w-full mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
              <span className="text-white/60 font-mono-code">Presensi Masuk</span>
              <span className="px-2 py-0.5 rounded bg-[#39FF14]/15 text-[#39FF14] font-mono-code font-bold">
                08:45:12 WIB [OK]
              </span>
            </div>
          </div>

          {/* Right: POS Cashier & Inventory Terminal (7 Cols) */}
          <div className="sm:col-span-7 rounded-xl bg-black/60 border border-white/10 p-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono-code text-white/50 mb-2">
                <span>INVOICE: #TRX-2026-089</span>
                <span className="text-white/80">Kasir: Cabang Utama</span>
              </div>

              {/* Order Items List */}
              <div className="space-y-1.5 text-xs font-mono-code">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-white/90 truncate max-w-[130px]">{item.name}</span>
                    <span className="text-[#39FF14] font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary & Profit Gauge */}
            <div className="mt-3 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono-code mb-1">
                <span className="text-white/60">Total Transaksi:</span>
                <span className="text-base font-bold text-white">Rp 2.300.000</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono-code text-white/50">
                <span className="text-emerald-400">Margin Profit: +42.8%</span>
                <span className="text-blue-400">ESC/POS Thermal Print Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. PLN E-Procurement Dashboard
  if (project.id === 'pln-eprocurement') {
    const generatedCode = `PLN-IP/PROC/${docCategory}/${new Date().getFullYear()}/${String(docSequence).padStart(4, '0')}`;

    return (
      <div className={`w-full bg-[#0a0e17] rounded-2xl border border-yellow-500/30 overflow-hidden flex flex-col ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-mono-code">
          <div className="flex items-center gap-2 text-yellow-400">
            <FileText size={14} />
            <span>ENTERPRISE PROCUREMENT LIFECYCLE & AUTO-INDEXING</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 text-[10px] border border-yellow-500/30">
            ISO 9001 Compliant
          </span>
        </div>

        {/* Document Number Generator Simulator */}
        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60 font-mono-code">Kategori Dokumen:</span>
            <div className="flex gap-1">
              {(['RFP', 'TENDER', 'BAST'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDocCategory(cat);
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono-code font-bold transition cursor-pointer ${
                    docCategory === cat ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Code Display Box */}
          <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="font-mono-code text-xs sm:text-sm font-bold text-yellow-300 tracking-wide">
                {generatedCode}
              </span>
            </div>
            {interactive && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDocSequence(prev => prev + 1);
                  setCopiedDoc(true);
                  setTimeout(() => setCopiedDoc(false), 1500);
                }}
                className="px-2.5 py-1 rounded bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-300 text-[10px] font-mono-code transition cursor-pointer flex items-center gap-1"
              >
                {copiedDoc ? <Check size={11} /> : <RefreshCw size={11} />} Next Sequence (+1)
              </button>
            )}
          </div>
        </div>

        {/* Procurement Pipeline Steps */}
        <div className="mt-3 grid grid-cols-4 gap-1 text-center font-mono-code text-[9px] sm:text-[10px]">
          <div className="p-1.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ✓ Vendor Qual.
          </div>
          <div className="p-1.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
            ✓ Technical RFP
          </div>
          <div className="p-1.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
            ● Budget Burn
          </div>
          <div className="p-1.5 rounded bg-white/5 text-white/40 border border-white/10">
            ○ Final BAST
          </div>
        </div>
      </div>
    );
  }

  // 4. Amanah (Zero-Knowledge Healthcare Consent Console)
  if (project.id === 'amanah-consent') {
    return (
      <div className={`w-full bg-[#0d0914] rounded-2xl border border-purple-500/30 overflow-hidden flex flex-col ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-mono-code">
          <div className="flex items-center gap-2 text-purple-400">
            <ShieldCheck size={14} />
            <span>CRYPTOGRAPHIC PATIENT CONSENT & GO BACKEND</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 text-[10px] border border-purple-500/30">
            Go Microservice • 6.2ms
          </span>
        </div>

        {/* Cryptographic Keypair & Consent Simulator */}
        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60 font-mono-code flex items-center gap-1">
              <Lock size={12} className="text-purple-400" /> Patient Enclave Key:
            </span>
            <span className="font-mono-code text-[11px] text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded">
              {simulatedSignature}
            </span>
          </div>

          {/* Consent Access Toggle Card */}
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="text-left">
              <div className="text-xs font-bold text-white font-sans-general">Dr. Adrian S. (Spesialis Jantung)</div>
              <div className="text-[10px] text-white/50 font-mono-code">RSUP Dr. Sardjito • E-Rekam Medis #RM-992</div>
            </div>

            {interactive && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setConsentActive(!consentActive);
                  setSimulatedSignature('0x' + Math.random().toString(16).substring(2, 10) + '...f9');
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-code font-bold transition cursor-pointer flex items-center gap-1 ${
                  consentActive 
                    ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/50' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}
              >
                {consentActive ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                {consentActive ? 'AUTHORIZED [24H]' : 'REVOKED'}
              </button>
            )}
          </div>
        </div>

        {/* Security Metrics Strip */}
        <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-white/60">
          <span className="flex items-center gap-1 text-purple-300">
            <Key size={11} /> Zero-Knowledge Client Signature
          </span>
          <span className="text-emerald-400">HIPAA & GDPR Compliant</span>
        </div>
      </div>
    );
  }

  // 5. WhatsApp AI Bot & Training Ground
  if (project.id === 'whatsapp-ai-bot') {
    return (
      <div className={`w-full bg-[#091512] rounded-2xl border border-[#25D366]/40 overflow-hidden flex flex-col ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
        {/* Top WhatsApp Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-mono-code">
          <div className="flex items-center gap-2 text-[#25D366]">
            <Bot size={15} />
            <span>WHATSAPP AI ASSISTANT & CLAUDE TRAINING GROUND</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#25D366]/15 text-[#25D366] text-[10px] border border-[#25D366]/30">
            Latency &lt; 1.8s
          </span>
        </div>

        {/* Chat Feed Simulator */}
        <div className="p-3 rounded-xl bg-[#06100d] border border-white/10 space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col max-w-[85%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div
                className={`p-2.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#005c4b] text-white rounded-br-none'
                    : 'bg-[#202c33] text-white/90 rounded-bl-none border border-white/10'
                }`}
              >
                {msg.text}
                <div className="text-[9px] font-mono-code text-white/40 text-right mt-1">
                  {msg.time} {msg.sender === 'user' && '✓✓'}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="mr-auto p-2 rounded-2xl bg-[#202c33] text-[11px] text-white/60 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.4s]" />
              <span>AI Assistant sedang mengetik...</span>
            </div>
          )}
        </div>

        {/* Interactive Chat Prompts & Input Bar */}
        {interactive && (
          <div className="mt-2.5 space-y-2">
            {/* Quick preset questions */}
            <div className="flex flex-wrap gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSendChat('Gimana cara bot belajar gaya bahasa owner?');
                }}
                className="px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-[10px] font-mono-code text-white/80 border border-white/10 transition"
              >
                💬 Tanya Gaya Bahasa
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSendChat('Bisa integrasi biometric face recognition?');
                }}
                className="px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-[10px] font-mono-code text-white/80 border border-white/10 transition"
              >
                ⚡ Tanya Biometric
              </button>
            </div>

            {/* Input Row */}
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                placeholder="Test chat bot di sini..."
                className="flex-1 px-3 py-1.5 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#25D366]"
              />
              <button
                onClick={() => handleSendChat()}
                className="p-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold transition"
                title="Send test message"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 6. SEHAT LANSIA (Elderly Health Assistant & Voice Medication)
  if (project.id === 'sehat-lansia') {
    const filteredMeds = activeFilter === 'Semua' 
      ? meds 
      : meds.filter(m => m.timing === activeFilter);
    const takenCount = meds.filter(m => m.taken).length;
    const progressPct = Math.round((takenCount / meds.length) * 100);

    return (
      <div className="w-full h-full bg-[#edf7f2] text-neutral-900 p-3 sm:p-4 rounded-2xl flex flex-col justify-between font-sans shadow-inner select-none overflow-y-auto">
        <div>
          {/* Top Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-emerald-200/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00875a] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                💚
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-sm text-[#006644] leading-tight">SehatLansia</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Asisten Sehat Keluarga
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500">
                  Untuk: <strong className="text-neutral-700">Bapak Hartono & Ibu Siti (67 th)</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setElderlyMode(!elderlyMode);
                }}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                  elderlyMode 
                    ? 'bg-amber-100 border border-amber-400 text-amber-900 shadow-2xs' 
                    : 'bg-white border border-neutral-300 text-neutral-600'
                }`}
              >
                👁 Mode Lansia: {elderlyMode ? 'AKTIF' : 'NONAKTIF'}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSpeak('Halo Bapak Hartono dan Ibu Siti, jangan lupa minum obat penurun tensi dan vitamin hari ini ya!');
                }}
                className="p-1.5 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition cursor-pointer"
                title="Dengarkan Suara"
              >
                🔊
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert('🚨 Peringatan Darurat Terkirim ke WhatsApp Putra/Putri Anda (Keluarga Siaga)');
                }}
                className="px-2.5 py-1 rounded-full bg-red-50 hover:bg-red-100 border border-red-300 text-red-700 text-xs font-bold transition cursor-pointer flex items-center gap-1"
              >
                🚨 Bantuan Darurat
              </button>
            </div>
          </div>

          {/* Speech Audio Active Notification Banner */}
          {speechActive && (
            <div className="my-2 p-2 rounded-xl bg-emerald-700 text-white text-xs flex items-center gap-2 animate-pulse shadow-md">
              <span className="text-base">🗣️</span>
              <div className="flex-1 font-medium">"{speechActive}"</div>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">TTS Audio</span>
            </div>
          )}

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar border-b border-emerald-200/60 text-xs">
            <button className="px-3 py-1 rounded-full bg-[#00875a] text-white font-bold flex items-center gap-1.5 whitespace-nowrap shadow-2xs">
              💊 Jadwal Obat <span className="bg-red-500 text-white rounded-full px-1.5 py-0.2 text-[9px] font-mono">{meds.length - takenCount} Perlu</span>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak('Waktu tidur rata-rata Anda 7 jam 15 menit, kualitas tidur sangat baik.');
              }}
              className="px-2.5 py-1 rounded-full bg-white border border-emerald-200 text-neutral-700 hover:bg-emerald-50 whitespace-nowrap transition cursor-pointer"
            >
              🌙 Jadwal Tidur
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak('Hari ini Anda sudah berjalan 2.450 langkah dan membakar 110 kalori.');
              }}
              className="px-2.5 py-1 rounded-full bg-white border border-emerald-200 text-neutral-700 hover:bg-emerald-50 whitespace-nowrap transition cursor-pointer"
            >
              👟 Jalan & Kalori
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (!aiMealPhoto) {
                  setAiMealPhoto({
                    detected: true,
                    name: 'Sayur Bayam Bening & Pepes Ikan Mas',
                    notes: 'Rendah garam & kaya serat, sangat baik untuk penderita tensi tinggi.',
                    safeForElderly: true
                  });
                  handleSpeak('Analisis Foto AI: Makanan ini adalah Sayur Bayam dan Pepes Ikan Mas. Bagus sekali, rendah garam!');
                } else {
                  setAiMealPhoto(null);
                }
              }}
              className="px-2.5 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 font-semibold hover:bg-emerald-50 whitespace-nowrap transition cursor-pointer flex items-center gap-1"
            >
              📷 Foto Makanan <span className="bg-emerald-600 text-white text-[9px] px-1.5 py-0.2 rounded font-mono">AI Vision</span>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak('Izin rekam medis Anda diamankan dengan protokol blockchain Amanah.');
              }}
              className="px-2.5 py-1 rounded-full bg-white border border-purple-200 text-purple-800 font-semibold hover:bg-purple-50 whitespace-nowrap transition cursor-pointer flex items-center gap-1"
            >
              🛡 Izin Rekam Medis <span className="bg-purple-600 text-white text-[9px] px-1.5 py-0.2 rounded font-mono">Web3 / SSI</span>
            </button>
          </div>

          {/* AI Meal Photo Scanner Card (if triggered) */}
          {aiMealPhoto && (
            <div className="my-2 p-2.5 rounded-xl bg-white border-2 border-emerald-400 shadow-sm flex items-start justify-between gap-2 animate-in fade-in">
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-xl">
                  🥗
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.2 rounded">Gemini AI Vision</span>
                    <span className="font-bold text-xs text-neutral-800">{aiMealPhoto.name}</span>
                  </div>
                  <div className="text-[11px] text-neutral-600 mt-0.5">{aiMealPhoto.notes}</div>
                </div>
              </div>
              <button 
                onClick={() => setAiMealPhoto(null)} 
                className="text-neutral-400 hover:text-neutral-600 text-xs px-1"
              >
                ✕
              </button>
            </div>
          )}

          {/* Main Hero Card: Jadwal Minum Obat Hari Ini */}
          <div className="rounded-2xl bg-gradient-to-r from-[#00875a] to-[#047857] text-white p-3.5 sm:p-4 shadow-sm my-2">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-medium inline-block mb-1">
                  Pengingat Minum Obat Lansia
                </span>
                <h3 className={`font-bold leading-tight ${elderlyMode ? 'text-lg sm:text-xl' : 'text-base'}`}>
                  Jadwal Minum Obat Hari Ini
                </h3>
                <div className="text-xs text-emerald-100 mt-0.5">
                  Minggu, 30 Agustus 2026 • <strong>{takenCount}</strong> dari {meds.length} obat telah diminum
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const untaken = meds.filter(m => !m.taken);
                    if (untaken.length === 0) {
                      handleSpeak('Hebat sekali! Semua jadwal obat hari ini sudah lengkap diminum.');
                    } else {
                      handleSpeak(`Hari ini ada ${untaken.length} obat yang belum diminum, yaitu: ${untaken.map(u => u.name).join(', ')}.`);
                    }
                  }}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 text-[#006644] font-bold text-xs shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                >
                  🔊 Bacakan Jadwal (Suara)
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const name = prompt('Nama obat baru:');
                    if (name) {
                      setMeds(prev => [...prev, {
                        id: String(Date.now()),
                        name,
                        tag: 'Suplemen',
                        dose: '1 Tablet',
                        timing: 'Siang',
                        rule: 'Sesudah Makan',
                        taken: false
                      }]);
                    }
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#004d33] hover:bg-[#003824] text-white font-bold text-xs transition cursor-pointer"
                >
                  + Tambah Obat
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3 pt-2.5 border-t border-white/20">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-emerald-100">Kepatuhan Minum Obat Hari Ini</span>
                <span className="font-bold font-mono">{progressPct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                <div 
                  className="h-full bg-amber-400 transition-all duration-300 rounded-full"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Time Filter Pills */}
          <div className="flex items-center gap-1.5 my-2">
            <span className="text-[10px] font-bold text-neutral-500 font-mono">WAKTU:</span>
            {(['Semua', 'Pagi', 'Siang', 'Sore', 'Malam'] as const).map((filter) => (
              <button
                key={filter}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFilter(filter);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-neutral-900 text-white shadow-2xs'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Interactive Medicine Cards */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-500 font-semibold px-1">
              <span className="bg-amber-100 border border-amber-300 text-amber-900 px-2 py-0.5 rounded-full">
                {activeFilter === 'Semua' ? 'Pagi & Siang Hari' : `Waktu: ${activeFilter}`}
              </span>
              <span>{filteredMeds.length} Jenis Obat</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredMeds.map((med) => (
                <div
                  key={med.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMedTaken(med.id);
                  }}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 shadow-2xs ${
                    med.taken 
                      ? 'bg-emerald-50/80 border-emerald-400 opacity-80' 
                      : 'bg-white border-emerald-200 hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      med.taken ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {med.taken ? '✓' : '💊'}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-bold text-neutral-900 truncate ${elderlyMode ? 'text-sm' : 'text-xs'}`}>
                          {med.name}
                        </span>
                        <span className="px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-600 text-[9px] font-mono">
                          {med.tag}
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5 flex items-center gap-1.5">
                        <span>{med.dose}</span>
                        <span>•</span>
                        <span className="px-1.5 py-0.2 rounded bg-amber-50 border border-amber-200 text-amber-900 font-medium">
                          {med.rule}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(`Aturan obat ${med.name}: diminum ${med.dose}, ${med.rule}.`);
                      }}
                      className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-500 text-xs"
                      title="Bacakan aturan obat"
                    >
                      🔊
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMedTaken(med.id);
                      }}
                      className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                        med.taken ? 'bg-emerald-600 text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {med.taken ? 'Diminum' : 'Tandai'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-emerald-200/80 mt-2 flex items-center justify-between text-[10px] text-neutral-500">
          <span>Tersinkronisasi dengan WhatsApp Keluarga</span>
          <span className="text-emerald-700 font-bold font-mono">Amanah SSI Healthcare Node</span>
        </div>
      </div>
    );
  }

  // Projects without a bespoke simulator show their cover instead of nothing.
  return (
    <div className="w-full aspect-[16/9] rounded-2xl border border-white/10 overflow-hidden bg-black">
      <img src={project.thumbUrl} alt={project.title} className="w-full h-full object-cover" />
    </div>
  );
};
