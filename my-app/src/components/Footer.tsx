import React from 'react';
import type { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onOpenDonate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDonate }) => {
  return (
    <>
      <footer className="w-full py-16 border-t border-border-subtle relative z-10 bg-white text-[#191c1e]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            {/* Column 1: Logo & Vision */}
            <div className="md:col-span-4 reveal active">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/tmf-assets/minati-badges/tmf-circular-emblem.png"
                  alt="Tribeni Minati Foundation"
                  className="h-10 w-auto object-contain hover:scale-105 transition-transform"
                />
                <span className="font-headline-md text-xl font-bold text-[#191c1e]">
                  Tribeni Minati
                </span>
              </div>
              
              <p className="text-body-base text-sm text-[#45464d] mb-6 text-balance leading-relaxed">
                Institutional altruism driven by statutory transparency and emotional commitment.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/tribeniminatifoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all shadow-xs"
                  title="Official Facebook Page"
                >
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </a>
                <a
                  href="https://www.instagram.com/minatifoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white transition-all shadow-xs"
                  title="Instagram: @minatifoundation"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </a>
                <a
                  href="https://www.facebook.com/tribeniminatifoundation/photos_by"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#4b41e1] hover:bg-[#4b41e1] hover:text-white transition-all shadow-xs"
                  title="Facebook Field Photos"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_library</span>
                </a>
                <a
                  href="https://www.facebook.com/tribeniminatifoundation/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#111827] transition-all shadow-xs"
                  title="Facebook Reels & Field Video Clips"
                >
                  <span className="material-symbols-outlined text-[18px]">movie</span>
                </a>
                <a
                  href="mailto:tribeniminatifoundation@gmail.com"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#111827] hover:text-white transition-all shadow-xs"
                  title="Email Secretariat"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </a>
              </div>
            </div>

            {/* Column 2 & 3: Statutory Info & Legal */}
            <div className="md:col-span-8 flex flex-col sm:flex-row justify-end gap-12 sm:gap-24 md:gap-32 text-left sm:text-right reveal stagger-2 active">
              <div className="flex flex-col gap-4">
                <span className="font-label-caps text-xs text-[#191c1e] font-bold uppercase tracking-wider">
                  Statutory Info
                </span>
                <p className="font-label-caps text-xs text-[#45464d]">
                  DARPAN ID: <span className="text-[#191c1e] font-bold">WB/2026/0939703</span>
                </p>
                <p className="font-label-caps text-xs text-[#45464d]">
                  Reg No: <span className="text-[#191c1e] font-bold">SO212276</span>
                </p>
                <p className="font-label-caps text-xs text-[#059669] font-bold">
                  80G Certified Non-Profit
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-label-caps text-xs text-[#191c1e] font-bold uppercase tracking-wider">
                  Navigation &amp; Legal
                </span>
                <button
                  onClick={() => onNavigate && onNavigate('about')}
                  className="text-body-base text-sm text-[#45464d] hover:text-[#4b41e1] transition-colors text-left sm:text-right cursor-pointer"
                >
                  About M-I-N-A-T-I
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('programs')}
                  className="text-body-base text-sm text-[#45464d] hover:text-[#4b41e1] transition-colors text-left sm:text-right cursor-pointer"
                >
                  Core Initiatives
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('transparency')}
                  className="text-body-base text-sm text-[#45464d] hover:text-[#4b41e1] transition-colors text-left sm:text-right cursor-pointer"
                >
                  Audited Ledgers
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="text-body-base text-sm text-[#45464d] hover:text-[#4b41e1] transition-colors text-left sm:text-right cursor-pointer"
                >
                  Secretariat Contact
                </button>
                {onOpenDonate && (
                  <button
                    onClick={onOpenDonate}
                    className="text-body-base text-sm font-bold text-[#b45309] hover:text-[#78350f] transition-colors text-left sm:text-right cursor-pointer"
                  >
                    Donate (80G Certified)
                  </button>
                )}
              </div>
            </div>

          </div>

          <div className="border-t border-border-subtle pt-8 text-center text-xs font-label-caps text-[#64748B] reveal stagger-3 active">
            © 2026 Tribeni Minati Foundation. All donations are 80G tax-exempt in India.
          </div>
        </div>
      </footer>
    </>
  );
};
