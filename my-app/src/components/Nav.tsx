import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut, ShieldCheck, Sparkles, PhoneCall, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { TMF_META } from '../data/tmfVerifiedData';
import type { PageId } from '../types';
import { AnimatedIcon } from './animations/AnimatedIcon';

interface NavProps {
  currentPage: PageId;
  onNavigate: (page: PageId, programId?: string) => void;
  onOpenDonate: () => void;
  onOpenAuth?: () => void;
}

export const Nav: React.FC<NavProps> = ({
  currentPage,
  onNavigate,
  onOpenDonate,
  onOpenAuth,
}) => {
  const { user, signOut } = useAuth();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown="more"]')) {
        setMoreDropdownOpen(false);
      }
      if (!target.closest('[data-dropdown="user"]')) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About M-I-N-A-T-I' },
    { id: 'programs', label: 'Initiatives' },
    { id: 'events', label: 'Camps & Drives' },
    { id: 'stories', label: 'Stories' },
    { id: 'transparency', label: 'Transparency' },
    { id: 'contact', label: 'Contact' },
  ];

  const moreLinks: { id: PageId; label: string; desc: string; icon: string }[] = [
    { id: 'gallery', label: 'Photo & Video Archive', desc: '26 verified documentary field photojournalism assets', icon: 'photo_library' },
    { id: 'volunteer', label: 'Volunteer Pass & Youth Desk', desc: 'Generate your official digital volunteer identity pass', icon: 'badge' },
    { id: 'donor-portal', label: 'Donor 80G Certificate Portal', desc: 'Instant 50% tax exemption receipt & contribution records', icon: 'receipt_long' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Statutory Utility Strip (Stitch Navy Style) */}
      <div className="bg-[#111827] text-slate-300 text-[11px] font-mono py-1.5 px-4 sm:px-8 hidden md:block border-b border-white/10">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${TMF_META.contacts.secretary}`}
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-bold"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>24/7 Field Helpline: {TMF_META.contacts.secretary}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-slate-300">
              Reg: <strong className="text-white">{TMF_META.newRegNo}</strong> · DARPAN: <strong className="text-white">{TMF_META.ngoDarpanId}</strong>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>80G Certified Non-Profit</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400">Tribeni & Dhaniakhali, Hooghly, WB</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] border-b border-slate-200/80 py-2.5'
            : 'bg-white/75 backdrop-blur-2xl border-b border-white/30 py-3.5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Brand Identity / Official Emblem */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-border-subtle p-1 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[#4b41e1] transition-all">
              <img
                src="/tmf-assets/minati-badges/tmf-circular-emblem.png"
                alt="Tribeni Minati Foundation Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-headline-md text-lg sm:text-xl text-[#191c1e] tracking-tight group-hover:text-[#4b41e1] transition-colors block leading-tight font-extrabold">
                Tribeni Minati
              </span>
              <span className="text-[11px] font-mono text-[#64748B] block">
                ত্রিবেনী মিনতি ফাউন্ডেশন
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'programs' && currentPage === 'program');
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#4b41e1] font-bold'
                      : 'text-[#45464d] hover:text-[#191c1e] hover:-translate-y-0.5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* More Dropdown (Gallery, Volunteer, 80G Portal) */}
            <div
              data-dropdown="more"
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                className={`text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer py-1 ${
                  ['gallery', 'volunteer', 'donor-portal'].includes(currentPage)
                    ? 'text-[#4b41e1] font-bold'
                    : 'text-[#45464d] hover:text-[#191c1e]'
                }`}
              >
                <span>Explore More</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-72 rounded-2xl bg-white border border-border-subtle shadow-2xl p-2 z-50 space-y-1 before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-['']">
                  {moreLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setMoreDropdownOpen(false);
                      }}
                      className="w-full p-3 rounded-xl text-left hover:bg-[#f7f9fb] transition-colors cursor-pointer block group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#4b41e1] text-[18px]">
                          {item.icon}
                        </span>
                        <div className="text-xs font-bold text-[#191c1e] group-hover:text-[#4b41e1]">
                          {item.label}
                        </div>
                      </div>
                      <div className="text-[10px] text-[#64748B] mt-0.5 pl-6">
                        {item.desc}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right CTA Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            
            {/* Stitch Amber Donate Button with Animated Icon */}
            <button
              onClick={onOpenDonate}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 bg-[#F59E0B] text-[#111827] font-extrabold rounded-2xl shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer text-xs uppercase tracking-wider"
            >
              <AnimatedIcon preset="heart" size={16} fallbackMaterialIcon="favorite" />
              <span>Donate (80G)</span>
            </button>

            {/* User Account / Profile Icon */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg hover:shadow-xl overflow-hidden border border-white/20"
                >
                  {user.user_metadata?.avatar_url || user.user_metadata?.picture ? (
                    <img
                      src={user.user_metadata?.avatar_url || user.user_metadata?.picture}
                      alt={user.user_metadata?.full_name || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-[18px]">person</span>
                  )}
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-border-subtle shadow-xl p-2 z-50 space-y-1">
                    <div className="px-3 py-2 border-b border-slate-100">
                      <div className="text-xs font-bold text-[#191c1e] truncate">
                        {user.user_metadata?.full_name || 'Verified Member'}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono truncate">
                        {user.email}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onNavigate('donor-portal');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 rounded-xl text-left text-xs font-semibold text-[#191c1e] hover:bg-slate-50 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>My 80G Certificates</span>
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('volunteer');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 rounded-xl text-left text-xs font-semibold text-[#191c1e] hover:bg-slate-50 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Volunteer Pass</span>
                    </button>

                    <button
                      onClick={async () => {
                        await signOut();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 rounded-xl text-left text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors cursor-pointer border-t border-slate-100 pt-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => (onOpenAuth ? onOpenAuth() : onNavigate('donor-login'))}
                className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-md"
                title="Donor Sign In / 80G Portal"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#191c1e] hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer with ALL Pages */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full h-[calc(100vh-64px)] bg-white border-t border-border-subtle shadow-2xl px-6 py-6 overflow-y-auto z-50 flex flex-col justify-between">
          <div className="space-y-1">
            {[...navLinks, ...moreLinks.map(m => ({ id: m.id, label: m.label }))].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full p-3.5 rounded-xl text-left text-sm font-semibold flex items-center justify-between transition-colors ${
                  currentPage === link.id
                    ? 'bg-indigo-50 text-[#4b41e1] font-bold'
                    : 'text-[#191c1e] hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3 pb-8">
            <button
              onClick={() => {
                onOpenDonate();
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-[#F59E0B] text-[#111827] font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
            >
              Donate Now (80G Tax Saved)
            </button>

            <div className="text-center font-mono text-[11px] text-[#64748B]">
              Helpline: {TMF_META.contacts.secretary}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
