import { TechVideo, Project, Skill, ServiceItem } from '../types';

export const TECH_VIDEOS: TechVideo[] = [
  {
    id: 'cyber-circuit',
    title: 'Cyber Circuit Matrix',
    subtitle: 'High-speed digital data streams & futuristic circuitry',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-circuit-board-digital-animation-31835-large.mp4',
    fallbackGradient: 'radial-gradient(ellipse at center, #072b11 0%, #020b05 60%, #000000 100%)',
    themeColor: '#39FF14'
  },
  {
    id: 'cyber-tunnel',
    title: 'Quantum Light Tunnel',
    subtitle: 'Cyberpunk hyperspace digital highway',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-neon-lights-41712-large.mp4',
    fallbackGradient: 'radial-gradient(ellipse at center, #0a192f 0%, #020712 60%, #000000 100%)',
    themeColor: '#00F0FF'
  },
  {
    id: 'matrix-code',
    title: 'Digital Matrix Rain',
    subtitle: 'Streaming green alphanumeric telemetry code',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-31912-large.mp4',
    fallbackGradient: 'radial-gradient(ellipse at center, #051f0f 0%, #010a05 60%, #000000 100%)',
    themeColor: '#25D366'
  },
  {
    id: 'digital-charts',
    title: 'Enterprise Analytics Grid',
    subtitle: 'Futuristic telemetry, data pipelines & code blocks',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-31912-large.mp4',
    fallbackGradient: 'radial-gradient(ellipse at center, #180928 0%, #080311 60%, #000000 100%)',
    themeColor: '#BD00FF'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'goed-service',
    title: 'Goed Service',
    subtitle: 'Premium iPhone repair & accessories landing page with interactive 3D product visualizer.',
    category: 'web3d',
    role: 'WEBSITE & 3D PRODUCT VIEW',
    desc: 'Premium iPhone repair & accessories landing page — service booking, transparent pricing, and an interactive 3D product view right in the browser.',
    fullDesc: 'A high-converting, luxury dark-themed digital storefront for an iPhone repair brand. Integrates interactive Google <model-viewer> 3D product inspection with custom lighting, GSAP micro-interactions, responsive repair booking calculator, and automated WhatsApp quotation dispatch.',
    metrics: [
      '3D WebGL render with zero lag',
      'Instant repair cost calculator',
      'Smooth GSAP timeline animations'
    ],
    keyFeatures: [
      'Interactive 3D model orbit & zoom viewer for iPhone components',
      'Live spare-part pricing & booking schedule module',
      'Fluid scroll-triggered GSAP entrance animations',
      'Mobile-first responsive design tailored for luxury branding'
    ],
    tags: ['HTML/CSS/JS', 'GSAP', 'model-viewer (3D)'],
    thumbUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
    architectureDetails: 'Built using lightweight vanilla JS and Google <model-viewer> library for rapid asset rendering, combined with GSAP ScrollTrigger for buttery 60fps animations.',
    year: '2026',
    client: 'Goed Service'
  },
  {
    id: 'goed-acsess',
    title: 'Goed Acsess (iServis Pro)',
    subtitle: 'Cross-platform POS & service enterprise suite with face-recognition attendance.',
    category: 'pos',
    role: 'POS & BUSINESS APP',
    desc: 'Cross-platform POS and service management app for an iPhone repair business — live revenue and profit dashboard, spare-parts inventory, multi-branch support, and staff face-recognition attendance.',
    fullDesc: 'A full-scale point-of-sale and technician workflow manager built for multi-branch operation. Includes biometric facial recognition clock-in via face-api.js, real-time inventory synchronization with Supabase, offline transaction caching, thermal receipt printing via Electron USB drivers, and automated WhatsApp status updates to customers.',
    metrics: [
      'Multi-branch real-time sync',
      '99.4% Face recognition accuracy',
      'Thermal receipt ESC/POS integration'
    ],
    keyFeatures: [
      'Biometric face-recognition attendance with anti-spoofing',
      'Live profit/revenue analytics dashboard with margin tracking',
      'Barcode scanner and spare-part low-stock alerts',
      'Cross-platform desktop (Electron) and mobile (Capacitor) build'
    ],
    tags: ['Electron', 'Capacitor', 'Supabase', 'face-api.js'],
    thumbUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    architectureDetails: 'Unified codebase powered by Electron for Windows/macOS desktop POS terminals, Capacitor for technician Android/iOS mobile devices, and PostgreSQL/Supabase real-time row-level security backend.',
    year: '2026',
    client: 'Goed Acsess'
  },
  {
    id: 'pln-eprocurement',
    title: 'E-Procurement — PT PLN Indonesia Power',
    subtitle: 'Automated enterprise procurement lifecycle, document numbering, and analytics.',
    category: 'enterprise',
    role: 'ENTERPRISE DASHBOARD',
    desc: 'Digital procurement prototype: automatic document numbering & scheduling, a full procurement document flow, and a summary dashboard.',
    fullDesc: 'An enterprise-grade procurement management console designed for state power infrastructure workflows. Standardizes Vendor Qualification, Request for Proposals (RFP), automated chronologic document index generation, Gantt timeline tracking, and dynamic budget burn charts.',
    metrics: [
      'Automated ISO document indexing',
      'Interactive Chart.js metrics',
      'Audit trail compliance ready'
    ],
    keyFeatures: [
      'Sequential document numbering algorithm with validation rules',
      'Multi-step vendor submission & scoring workflow',
      'Interactive Chart.js procurement status breakdown',
      'Dynamic procurement timeline calendar & alert thresholds'
    ],
    tags: ['HTML/CSS/JS', 'Chart.js'],
    thumbUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    architectureDetails: 'Engineered with clean separation of presentation and business logic, high-contrast data visualization using Chart.js, and strict enterprise form validation.',
    year: '2025',
    client: 'PT PLN Indonesia Power'
  },
  {
    id: 'amanah-consent',
    title: 'Amanah — Medical Records Console',
    subtitle: 'Cryptographic patient-controlled medical records permission platform.',
    category: 'enterprise',
    role: 'HEALTHCARE & CONSENT PLATFORM',
    desc: 'A medical-records access consent platform: every permission is signed with a private key that stays on the patient\'s own device and is never sent to the server.',
    fullDesc: 'Zero-knowledge healthcare consent platform ensuring GDPR and HIPAA compliance. Patients hold cryptographic private keys client-side to authorize specific doctors, clinics, or lab centers to read specific time-boxed electronic health records without server-side decryption exposure.',
    metrics: [
      'Zero-knowledge client-side encryption',
      'Sub-10ms Go microservice throughput',
      'Full cryptographic verification'
    ],
    keyFeatures: [
      'Client-side RSA/ECC signature generation for medical access',
      'Role-based doctor, hospital, and patient authorization portal',
      'High-concurrency Go (Golang) REST API backend',
      'Immutable audit logging of every record inspection'
    ],
    tags: ['Go', 'REST API', 'Cryptography', 'PostgreSQL'],
    thumbUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    architectureDetails: 'High-speed Go backend providing microsecond cryptographic verification, backed by secure relational PostgreSQL schemas with client-side key storage in hardware secure enclaves.',
    year: '2026',
    client: 'Amanah Health Group'
  },
  {
    id: 'whatsapp-ai-bot',
    title: 'WhatsApp Auto-Reply Bot & Studio',
    subtitle: 'Context-aware AI conversational agent trained on owner writing style.',
    category: 'ai',
    role: 'AI AUTOMATION',
    desc: 'A WhatsApp reply bot that learns to mimic its owner\'s own writing style, with a built-in "Training Ground" to calibrate replies using Claude AI.',
    fullDesc: 'Autonomous WhatsApp assistant that handles customer inquiries, appointments, and technical diagnosis in natural colloquial voice. Includes an interactive web "Training Ground" dashboard allowing the owner to fine-tune system prompts, evaluate test dialogues, and test reply confidence in real-time.',
    metrics: [
      'Under 2.1s average response time',
      'Natural Indonesian/English tone mimicry',
      'Built-in calibration playground'
    ],
    keyFeatures: [
      'OpenWA WhatsApp Web bridge integration with session persistence',
      'Claude AI & LLM prompt engineering for authentic voice tone',
      'Web-based Training Ground UI to calibrate answers and knowledge base',
      'Automatic escalation flag when human technician intervention is required'
    ],
    tags: ['Node.js', 'OpenWA', 'Claude API', 'Tailwind CSS'],
    thumbUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    architectureDetails: 'Event-driven Node.js architecture connecting headless Chromium OpenWA sessions with streaming Claude AI API completions and local fallback cache.',
    year: '2026',
    client: 'Gutive Automation Labs'
  },
  {
    id: 'sehat-lansia',
    title: 'SehatLansia — Asisten Kesehatan & Rekam Medis',
    subtitle: 'Accessible elderly health companion, voice scheduling, AI Vision nutrition, & blockchain consent.',
    category: 'ai',
    role: 'AI HEALTHCARE & ELDERLY TECH',
    desc: 'Asisten kesehatan lansia dengan antarmuka ramah usia: pengingat obat berbasis suara, analisis foto makanan via AI Vision, dan integrasi izin rekam medis terdesentralisasi.',
    fullDesc: 'A specialized, accessible elderly health management companion designed for senior family members. Features high-contrast oversized typography, voice-activated medication schedules (Text-to-Speech), AI Vision nutrition detection from meal photos, and sovereign patient-controlled health records consent (SSI / Amanah integration).',
    metrics: [
      '100% Voice & High-Contrast Mode',
      'AI Vision Instant Food Analysis',
      'Zero-Knowledge Consent Integration'
    ],
    keyFeatures: [
      'Mode Lansia (Teks Besar & High Contrast Audio Guidance)',
      'Jadwal Minum Obat dengan pembacaan suara otomatis (TTS)',
      'Analisis Nutrisi & Porsi Makanan menggunakan AI Vision',
      'Integrasi Izin Rekam Medis Amanah (Self-Sovereign Identity / SSI)',
      'Tombol Bantuan Darurat & Notifikasi Instan Keluarga'
    ],
    tags: ['React', 'AI Vision', 'Text-to-Speech', 'Web3 / SSI'],
    thumbUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    architectureDetails: 'Modern accessible React frontend with Web Speech API audio synthesizer, Gemini AI Vision multimodal image parser, and cryptographic SSI consent verification.',
    year: '2026',
    client: 'SehatLansia / Family Health AI'
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'backend',
    categoryLabel: 'Backend & Server',
    iconName: 'Server',
    level: 'Production Expert',
    experience: '8+ Years',
    description: 'High-throughput microservices, REST/GraphQL APIs, WebSocket real-time engines, and background daemon jobs.',
    accentColor: '#68A063',
    relatedProjects: ['WhatsApp Auto-Reply Bot', 'Goed Acsess']
  },
  {
    id: 'golang',
    name: 'Go (Golang)',
    category: 'backend',
    categoryLabel: 'Backend & Systems',
    iconName: 'Cpu',
    level: 'High Concurrency',
    experience: '5+ Years',
    description: 'Concurrent microservices, cryptographic verification pipelines, low-latency gRPC services, and CLI tools.',
    accentColor: '#00ADD8',
    relatedProjects: ['Amanah — Medical Records']
  },
  {
    id: 'supabase',
    name: 'Supabase & PostgreSQL',
    category: 'database',
    categoryLabel: 'Database & Auth',
    iconName: 'Database',
    level: 'Architect',
    experience: '6+ Years',
    description: 'Relational schema design, Row-Level Security (RLS), real-time change subscriptions, and edge functions.',
    accentColor: '#3ECF8E',
    relatedProjects: ['Goed Acsess', 'PLN E-Procurement']
  },
  {
    id: 'react-ts',
    name: 'React & TypeScript',
    category: 'frontend',
    categoryLabel: 'Frontend Architecture',
    iconName: 'Code2',
    level: 'Senior Architect',
    experience: '8+ Years',
    description: 'Scalable component design systems, state management, complex data tables, and strict type safety.',
    accentColor: '#61DAFB',
    relatedProjects: ['Goed Acsess', 'PLN E-Procurement', 'Goed Service']
  },
  {
    id: 'electron-capacitor',
    name: 'Electron & Capacitor',
    category: 'frontend',
    categoryLabel: 'Cross-Platform App',
    iconName: 'MonitorSmartphone',
    level: 'Production Pro',
    experience: '5+ Years',
    description: 'Desktop Windows/macOS/Linux software and Android/iOS mobile native integration with hardware peripherals.',
    accentColor: '#9FEAF9',
    relatedProjects: ['Goed Acsess (iServis Pro)']
  },
  {
    id: 'claude-ai',
    name: 'Claude & Anthropic API',
    category: 'ai',
    categoryLabel: 'AI & LLM Systems',
    iconName: 'Sparkles',
    level: 'Advanced Agentic',
    experience: '3+ Years',
    description: 'Context-window optimization, persona calibration, function-calling, prompt engineering, and agent workflows.',
    accentColor: '#D97706',
    relatedProjects: ['WhatsApp Auto-Reply Bot']
  },
  {
    id: 'face-api',
    name: 'face-api.js & Vision AI',
    category: 'ai',
    categoryLabel: 'Computer Vision',
    iconName: 'ScanFace',
    level: 'Biometric Specialist',
    experience: '4+ Years',
    description: 'Client-side WebGL face detection, landmark 68-point extraction, anti-spoofing, and attendance authentication.',
    accentColor: '#EC4899',
    relatedProjects: ['Goed Acsess (iServis Pro)']
  },
  {
    id: 'tailwind-motion',
    name: 'Tailwind CSS & Motion',
    category: 'frontend',
    categoryLabel: 'UI & Animations',
    iconName: 'Palette',
    level: 'Master Craft',
    experience: '7+ Years',
    description: 'Design systems, pixel-perfect fluid layouts, dark mode ergonomics, and 60fps micro-animations.',
    accentColor: '#38BDF8',
    relatedProjects: ['All Gutive Projects']
  },
  {
    id: 'gsap-3d',
    name: 'GSAP & 3D Model-Viewer',
    category: 'frontend',
    categoryLabel: 'Creative Tech & 3D',
    iconName: 'Box',
    level: 'Creative Technologist',
    experience: '6+ Years',
    description: 'Interactive WebGL 3D model inspection, ScrollTrigger timelines, and cinema-grade interactive pages.',
    accentColor: '#88CE02',
    relatedProjects: ['Goed Service']
  },
  {
    id: 'docker-devops',
    name: 'Docker & Cloud Infra',
    category: 'devops',
    categoryLabel: 'DevOps & Deployment',
    iconName: 'Container',
    level: 'Production Ready',
    experience: '6+ Years',
    description: 'Containerization, Cloud Run, Nginx reverse proxy configuration, CI/CD automated release pipelines.',
    accentColor: '#2496ED',
    relatedProjects: ['PLN E-Procurement', 'Amanah']
  },
  {
    id: 'chartjs-analytics',
    name: 'Chart.js & Data Viz',
    category: 'frontend',
    categoryLabel: 'Data Visualization',
    iconName: 'BarChart3',
    level: 'Dashboard Specialist',
    experience: '6+ Years',
    description: 'Custom canvas analytics, real-time KPI graphs, burn charts, and financial analytics visualizations.',
    accentColor: '#FF6384',
    relatedProjects: ['PLN E-Procurement', 'Goed Acsess']
  },
  {
    id: 'openwa-bot',
    name: 'OpenWA & WhatsApp API',
    category: 'backend',
    categoryLabel: 'Messaging & Webhooks',
    iconName: 'MessageSquareCode',
    level: 'Automation Pro',
    experience: '4+ Years',
    description: 'Headless WhatsApp socket automation, event-driven webhooks, bulk notification systems, and customer bots.',
    accentColor: '#25D366',
    relatedProjects: ['WhatsApp Auto-Reply Bot', 'Goed Service']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fullstack-dev',
    title: 'Full Stack Web Architecture',
    tagline: 'From database schemas to high-speed interfaces',
    description: 'We architect robust web applications with clean TypeScript, scalable relational databases, and snappy user interfaces that convert.',
    iconName: 'Layers',
    deliverables: ['Custom Web Applications', 'REST & GraphQL APIs', 'Database Architecture', 'Performance Optimization'],
    techTags: ['React', 'Node.js', 'Go', 'Supabase', 'PostgreSQL']
  },
  {
    id: 'pos-desktop-mobile',
    title: 'Cross-Platform Desktop & POS',
    tagline: 'Native hardware integration across devices',
    description: 'Unified applications running natively on Windows, macOS, Android, and iOS with barcode scanner, thermal printer, and biometric support.',
    iconName: 'MonitorSmartphone',
    deliverables: ['POS Systems', 'Inventory Managers', 'Biometric Clock-In', 'Offline Local Storage'],
    techTags: ['Electron', 'Capacitor', 'face-api.js', 'ESC/POS']
  },
  {
    id: 'ai-automation',
    title: 'AI Agents & Automation Bots',
    tagline: 'Intelligent workflows that work around the clock',
    description: 'Custom AI bots trained on your business domain, customer support auto-responders, data extraction pipelines, and smart automation.',
    iconName: 'Bot',
    deliverables: ['WhatsApp AI Assistants', 'Custom Training Grounds', 'Document Parsing', 'Workflow Webhooks'],
    techTags: ['Claude API', 'OpenAI', 'OpenWA', 'Node.js']
  },
  {
    id: 'creative-3d-ui',
    title: 'High-Impact 3D & Creative Web',
    tagline: 'Distinctive visual storytelling that commands attention',
    description: 'Interactive 3D product visualizers, WebGL animations, and award-winning bespoke landing pages that elevate brand prestige.',
    iconName: 'Box',
    deliverables: ['Interactive 3D Product Views', 'GSAP Scroll Experiences', 'Brand Identity Systems', 'Responsive Design'],
    techTags: ['model-viewer', 'GSAP', 'Three.js', 'Tailwind CSS']
  }
];
