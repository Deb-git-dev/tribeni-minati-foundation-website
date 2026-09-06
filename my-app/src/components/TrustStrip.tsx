import React from 'react';
import { TMF_META, LEGAL_DOCS } from '../data/tmfVerifiedData';
import type { LegalDocument } from '../data/tmfVerifiedData';

interface TrustStripProps {
  onOpenDocument?: (doc: LegalDocument) => void;
  onNavigateTransparency?: () => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({
  onOpenDocument,
  onNavigateTransparency,
}) => {
  const regDoc = LEGAL_DOCS.find((d) => d.id === 'society-reg') || LEGAL_DOCS[0];

  const trustItems = [
    {
      icon: 'verified',
      color: 'text-[#4b41e1]',
      bg: 'bg-indigo-50',
      title: 'Registered Society',
      subtitle: `Act XXVI of 1961 · Reg: ${TMF_META.newRegNo}`,
      badge: 'Est. 2013',
    },
    {
      icon: 'policy',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      title: 'NITI Aayog DARPAN',
      subtitle: `Unique ID: ${TMF_META.ngoDarpanId}`,
      badge: 'Verified NGO',
    },
    {
      icon: 'receipt_long',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      title: '12A & 80G Certified',
      subtitle: '50% Tax Deduction · Form 10BE Filing',
      badge: 'Tax Exemption',
    },
    {
      icon: 'account_balance',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      title: 'Central Bank of India',
      subtitle: 'Official Account: 5894594000',
      badge: 'Treasury Bank',
    },
  ];

  return (
    <div className="w-full py-6 bg-white border-y border-slate-200/60 relative z-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center flex-1 w-full">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenDocument && onOpenDocument(regDoc)}
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#f7f9fb] hover:bg-white hover:shadow-md border border-border-subtle transition-all cursor-pointer group"
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1.5">
                  <span className="text-xs font-bold text-[#191c1e] font-headline-md leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-white border border-border-subtle text-[#64748B] shrink-0">
                    {item.badge}
                  </span>
                </div>
                <div className="text-[10px] text-[#64748B] font-mono leading-tight">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {onNavigateTransparency && (
          <button
            onClick={onNavigateTransparency}
            className="flex items-center gap-1.5 text-xs font-bold text-[#4b41e1] hover:text-[#645efb] shrink-0 cursor-pointer font-mono"
          >
            <span>Verify Certificates</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        )}
      </div>
    </div>
  );
};
