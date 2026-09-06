import React, { useState } from 'react';
import type { PageId } from '../types';
import { LEGAL_DOCS } from '../data/tmfVerifiedData';
import { GridSweepContainer, GridSweepItem } from '../components/motion/GridSweep';
import { MotionFocusGroup, MotionFocusItem } from '../components/motion/MotionFocus';
import type { LegalDocument } from '../data/tmfVerifiedData';

interface TransparencyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDocument?: (doc: LegalDocument) => void;
  onOpenDonate?: () => void;
}

export const TransparencyPage: React.FC<TransparencyPageProps> = ({ onOpenDocument, onOpenDonate }) => {
  const [donationAmount, setDonationAmount] = useState<number>(100000);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const calculateImpact = (amt: number) => {
    const students = Math.max(1, Math.floor(amt / 10000));
    return `Supports ${students} student${students > 1 ? 's' : ''} with coaching and nutrition for a full academic year.`;
  };

  return (
    <div className="w-full pt-20 bg-[#f7f9fb] min-h-screen text-[#191c1e]">
      
      {/* Transparency Hero */}
      <section className="w-full bg-white pt-16 pb-20 relative overflow-hidden border-b border-slate-200/60">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2f4f6] rounded-full">
                <span className="material-symbols-outlined text-[#111827] text-sm">verified_user</span>
                <span className="font-label-caps text-xs uppercase text-[#45464d] tracking-widest font-bold">
                  Institutional Integrity
                </span>
              </div>

              <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#191c1e] tracking-tight leading-tight">
                Radical <span className="text-[#64748B] italic font-light">Transparency.</span><br />
                Quantifiable <span className="text-[#111827] relative inline-block">Impact.</span>
              </h1>

              <p className="font-body-lg text-base sm:text-lg text-[#45464d] max-w-xl leading-relaxed">
                We operate with the clinical precision of a financial institution. Every rupee is tracked, audited, and deployed for maximum societal yield. Your altruism, secured by statutory compliance.
              </p>
            </div>

            {/* Animated Financial Counter Bento */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-transparent rounded-[2rem] transform rotate-3 scale-105 pointer-events-none" />
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.08)] relative z-10 border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Applied to Programs */}
                  <div className="bg-[#f2f4f6] rounded-2xl p-6 space-y-4">
                    <span className="material-symbols-outlined text-[#4b41e1] bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-xl">
                      account_balance_wallet
                    </span>
                    <div>
                      <h3 className="font-stat-lg text-3xl sm:text-4xl text-[#191c1e]">94.2</h3>
                      <span className="font-label-caps text-xs text-[#45464d]">%</span>
                    </div>
                    <p className="font-body-base text-xs text-[#64748B]">Funds directly applied to programs</p>
                  </div>

                  {/* Beneficiaries */}
                  <div className="bg-[#131b2e] rounded-2xl p-6 space-y-4 text-white">
                    <span className="material-symbols-outlined text-[#ffddb8] bg-[#2a1700] w-12 h-12 flex items-center justify-center rounded-xl">
                      groups
                    </span>
                    <div>
                      <h3 className="font-stat-lg text-3xl sm:text-4xl text-white">15</h3>
                      <span className="font-label-caps text-xs text-indigo-200">K+</span>
                    </div>
                    <p className="font-body-base text-xs text-slate-300">Direct Lives Impacted</p>
                  </div>

                  {/* Overhead Bar */}
                  <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between border border-border-subtle">
                    <div className="space-y-1">
                      <p className="font-label-caps text-[11px] uppercase text-[#64748B] font-bold">Administrative Overhead</p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-stat-lg text-2xl text-[#191c1e]">5.8</span>
                        <span className="font-label-caps text-xs text-[#45464d]">%</span>
                      </div>
                    </div>
                    <div className="w-1/2 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4b41e1] rounded-full w-[5.8%]" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Credentials Bento */}
      <section className="w-full bg-[#f7f9fb] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#191c1e]">
                Statutory Credentials
              </h2>
              <p className="font-body-lg text-base text-[#45464d]">
                Fully registered and compliant under the prevailing laws of the Government of India, ensuring absolute legitimacy for domestic and international donors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 80G Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4b41e1] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    assured_workload
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline-md text-xl font-bold text-[#191c1e]">80G Certified</h3>
                  <p className="font-body-base text-sm text-[#45464d] leading-relaxed">
                    Donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act, 1961.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between border-t border-slate-100 font-mono text-xs text-[#64748B]">
                <span className="font-bold">AAPAT4811J</span>
                <span className="material-symbols-outlined text-[#4b41e1] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* 12A Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#111827] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    gavel
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline-md text-xl font-bold text-[#191c1e]">12A Registered</h3>
                  <p className="font-body-base text-sm text-[#45464d] leading-relaxed">
                    Recognized as a charitable society (SO212276), ensuring foundation income is exempt from tax.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between border-t border-slate-100 font-mono text-xs text-[#64748B]">
                <span className="font-bold">SO212276</span>
                <span className="material-symbols-outlined text-[#4b41e1] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* NITI Aayog Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4b41e1] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    policy
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline-md text-xl font-bold text-[#191c1e]">NITI Aayog DARPAN</h3>
                  <p className="font-body-base text-sm text-[#45464d] leading-relaxed">
                    Registered on NGO Darpan, facilitating transparent institutional partnerships with CSR foundations.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between border-t border-slate-100 font-mono text-xs text-[#64748B]">
                <span className="font-bold">WB/2026/0939703</span>
                <span className="material-symbols-outlined text-[#4b41e1] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Document Repository */}
      <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32">
                <h2 className="font-headline-lg text-3xl font-bold text-[#191c1e] mb-4">
                  Audited Reports
                </h2>
                <p className="font-body-base text-sm sm:text-base text-[#45464d] mb-8 leading-relaxed">
                  Access our annual financial statements, impact reports, and statutory filings. We believe in open-book operations.
                </p>
                <div className="bg-[#f2f4f6] p-6 rounded-2xl">
                  <h4 className="font-label-caps text-xs uppercase text-[#191c1e] mb-2 font-bold">
                    Internal Audit Partner
                  </h4>
                  <p className="font-body-base text-sm text-[#45464d] font-semibold">
                    Ernst &amp; Young (EY) India
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <MotionFocusGroup>
                <GridSweepContainer className="space-y-4" stagger={0.08}>
                  
                  {/* FY 23-24 */}
                  <GridSweepItem>
                    <MotionFocusItem id="doc-fy2324">
                      <div
                        onClick={() => onOpenDocument && onOpenDocument(LEGAL_DOCS[2] || LEGAL_DOCS[0])}
                        className="bg-white border border-border-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-[#f7f9fb] transition-colors cursor-pointer group shadow-xs"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                              picture_as_pdf
                            </span>
                          </div>
                          <div>
                            <h4 className="font-headline-md text-lg font-bold text-[#191c1e]">
                              Annual Impact &amp; Financial Report
                            </h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="font-label-caps text-xs text-[#45464d] bg-[#eceef0] px-2 py-1 rounded font-bold">
                                FY 2023-24
                              </span>
                              <span className="font-body-base text-xs text-[#64748B]">4.2 MB • Audited</span>
                            </div>
                          </div>
                        </div>
                        <button aria-label="Download FY 2023-24 Annual Report" className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-[#191c1e] group-hover:bg-[#111827] group-hover:text-white transition-all shrink-0">
                          <span className="material-symbols-outlined">download</span>
                        </button>
                      </div>
                    </MotionFocusItem>
                  </GridSweepItem>

                  {/* FY 22-23 */}
                  <GridSweepItem>
                    <MotionFocusItem id="doc-fy2223">
                      <div
                        onClick={() => onOpenDocument && onOpenDocument(LEGAL_DOCS[3] || LEGAL_DOCS[0])}
                        className="bg-white border border-border-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-[#f7f9fb] transition-colors cursor-pointer group shadow-xs"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                              picture_as_pdf
                            </span>
                          </div>
                          <div>
                            <h4 className="font-headline-md text-lg font-bold text-[#191c1e]">
                              Annual Impact &amp; Financial Report
                            </h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="font-label-caps text-xs text-[#45464d] bg-[#eceef0] px-2 py-1 rounded font-bold">
                                FY 2022-23
                              </span>
                              <span className="font-body-base text-xs text-[#64748B]">3.8 MB • Audited</span>
                            </div>
                          </div>
                        </div>
                        <button aria-label="Download FY 2022-23 Annual Report" className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-[#191c1e] group-hover:bg-[#111827] group-hover:text-white transition-all shrink-0">
                          <span className="material-symbols-outlined">download</span>
                        </button>
                      </div>
                    </MotionFocusItem>
                  </GridSweepItem>

                  {/* Trust Deed */}
                  <GridSweepItem>
                    <MotionFocusItem id="doc-trustdeed">
                      <div
                        onClick={() => onOpenDocument && onOpenDocument(LEGAL_DOCS[0])}
                        className="bg-white border border-border-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-[#f7f9fb] transition-colors cursor-pointer group shadow-xs"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-indigo-50 text-[#4b41e1] rounded-xl flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                              description
                            </span>
                          </div>
                          <div>
                            <h4 className="font-headline-md text-lg font-bold text-[#191c1e]">
                              Foundation Trust Deed &amp; Bylaws
                            </h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="font-label-caps text-xs text-[#45464d] bg-[#eceef0] px-2 py-1 rounded font-bold">
                                Legal
                              </span>
                              <span className="font-body-base text-xs text-[#64748B]">1.1 MB • Registered</span>
                            </div>
                          </div>
                        </div>
                        <button aria-label="Download Foundation Trust Deed &amp; Bylaws" className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-[#191c1e] group-hover:bg-[#111827] group-hover:text-white transition-all shrink-0">
                          <span className="material-symbols-outlined">download</span>
                        </button>
                      </div>
                    </MotionFocusItem>
                  </GridSweepItem>

                </GridSweepContainer>
              </MotionFocusGroup>
            </div>

          </div>
        </div>
      </section>

      {/* Tax Calculator Interactive Simulator */}
      <section className="w-full bg-[#131b2e] text-white py-20 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-bold text-white mb-4">
              Tax Optimization Simulator
            </h2>
            <p className="font-body-lg text-base sm:text-lg opacity-80 leading-relaxed">
              Understand how your contribution under Section 80G reduces your taxable income while maximizing social return on investment.
            </p>
          </div>

          {/* Double Bezel Calculator Widget */}
          <div className="bg-white/5 p-2 rounded-[2.5rem] max-w-4xl mx-auto border border-white/10 backdrop-blur-sm">
            <div className="bg-white text-[#191c1e] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Input Side */}
                <div className="space-y-8">
                  <div>
                    <label className="font-label-caps text-xs text-[#64748B] uppercase mb-4 block font-bold">
                      Select Donation Amount (₹)
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      className="w-full h-2.5 bg-[#eceef0] rounded-lg appearance-none cursor-pointer accent-[#4b41e1]"
                    />
                    <div className="flex justify-between text-xs font-mono text-[#64748B] mt-2 font-bold">
                      <span>₹10,000</span>
                      <span>₹10,00,000</span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#f7f9fb] rounded-2xl border border-border-subtle text-center">
                    <span className="font-label-caps text-xs text-[#45464d] uppercase block mb-2 font-bold">
                      You Donate
                    </span>
                    <h3 className="font-display-lg text-3xl font-extrabold text-[#191c1e]">
                      {formatCurrency(donationAmount)}
                    </h3>
                  </div>
                </div>

                {/* Output Side */}
                <div className="bg-[#131b2e] rounded-2xl p-8 text-white space-y-6">
                  <div className="space-y-2">
                    <span className="font-label-caps text-xs uppercase opacity-70 font-bold">
                      Tax Deduction Eligible (50%)
                    </span>
                    <h4 className="font-headline-lg text-3xl font-extrabold text-white">
                      {formatCurrency(donationAmount * 0.5)}
                    </h4>
                  </div>

                  <div className="h-px w-full bg-white/20" />

                  <div className="space-y-3">
                    <span className="font-label-caps text-xs uppercase text-[#ffddb8] font-bold">
                      Projected Impact Return
                    </span>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#ffddb8] text-3xl">school</span>
                      <p className="font-body-lg text-sm text-white font-medium">
                        {calculateImpact(donationAmount)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenDonate}
                    className="w-full py-4 bg-[#F59E0B] hover:bg-[#D97706] text-[#111827] font-bold rounded-xl shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 transition-all cursor-pointer text-sm"
                  >
                    Commit Contribution
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
