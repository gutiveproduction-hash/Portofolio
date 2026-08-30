import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Clock, DollarSign, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSubject = ''
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<string>('Full-Stack Web App');
  const [timeline, setTimeline] = useState<string>('2-4 Weeks');
  const [budget, setBudget] = useState<string>('$3k - $10k');
  const [clientMessage, setClientMessage] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const email = "gutiveproduction@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} - ${clientName || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello Gutive Co Team,\n\nI would like to discuss a new project with your studio.\n\n` +
      `• Name: ${clientName || 'Not specified'}\n` +
      `• Email: ${clientEmail || 'Not specified'}\n` +
      `• Project Type: ${projectType}\n` +
      `• Estimated Timeline: ${timeline}\n` +
      `• Target Budget: ${budget}\n\n` +
      `Project Brief / Requirements:\n${clientMessage || 'Looking forward to scheduling an introduction call.'}\n\nBest regards,\n${clientName}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl relative">
        {/* Background glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Left Column: Direct Contact Info & Value Prop */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-mono-code mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-neon-pulse" />
                LET'S BUILD SOMETHING EXCEPTIONAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight mb-4">
                Have a project in mind?
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 font-sans-general">
                Whether you need a full-scale POS management suite, custom AI automation bot, or an award-winning web app, we turn vision into production code.
              </p>
            </div>

            {/* Email Contact Box */}
            <div className="space-y-4 pt-4">
              <div className="p-5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md">
                <span className="text-[11px] font-mono-code text-white/40 uppercase tracking-wider block mb-2">
                  Direct Email Dispatch
                </span>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-mono-code text-white hover:text-[#39FF14] transition font-medium underline underline-offset-4"
                  >
                    {email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono-code text-white flex items-center gap-1.5 transition cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-[#39FF14]" />
                        <span className="text-[#39FF14]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="flex items-center gap-3 text-xs text-white/50 font-mono-code">
                <Clock size={14} className="text-[#39FF14]" />
                <span>Typical response time: Under 12 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Scope & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-xl">
              <h3 className="text-lg font-sans-general font-semibold text-white mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-[#39FF14]" /> Project Scope Configurator
              </h3>

              <form onSubmit={handleDirectEmail} className="space-y-5">
                {/* Project Category Picker */}
                <div>
                  <label className="text-xs font-mono-code text-white/60 block mb-2">
                    1. What type of project are you planning?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Full-Stack Web App',
                      'POS & Desktop App',
                      'AI & WhatsApp Bot',
                      '3D / Landing Page',
                      'Enterprise System',
                      'Code Consultation'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-2.5 rounded-xl text-xs text-left transition cursor-pointer border ${
                          projectType === type
                            ? 'bg-[#39FF14]/15 border-[#39FF14] text-white font-medium'
                            : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/70'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-code text-white/60 block mb-1.5">
                      2. Estimated Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-mono-code focus:border-[#39FF14] focus:outline-none cursor-pointer"
                    >
                      <option value="1-2 Weeks" className="bg-black text-white">1 - 2 Weeks (Express)</option>
                      <option value="2-4 Weeks" className="bg-black text-white">2 - 4 Weeks (Standard)</option>
                      <option value="1-3 Months" className="bg-black text-white">1 - 3 Months (Complex Suite)</option>
                      <option value="Ongoing Retainer" className="bg-black text-white">Ongoing Dedicated Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono-code text-white/60 block mb-1.5">
                      3. Target Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-mono-code focus:border-[#39FF14] focus:outline-none cursor-pointer"
                    >
                      <option value="$1k - $3k" className="bg-black text-white">$1,000 - $3,000</option>
                      <option value="$3k - $10k" className="bg-black text-white">$3,000 - $10,000</option>
                      <option value="$10k+" className="bg-black text-white">$10,000+ (Enterprise / Full System)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-code text-white/60 block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-white/30 focus:border-[#39FF14] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-code text-white/60 block mb-1.5">
                      Your Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. alex@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-white/30 focus:border-[#39FF14] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="text-xs font-mono-code text-white/60 block mb-1.5">
                    Project Notes & Goal (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your goals, required integrations, or specific features..."
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-white/30 focus:border-[#39FF14] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#39FF14] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-xl shadow-[#39FF14]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>Launch Direct Inquiry to gutiveproduction@gmail.com</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
