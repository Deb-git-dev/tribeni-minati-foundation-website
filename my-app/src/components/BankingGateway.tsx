import React, { useState } from 'react';
import { TMF_META, LEGAL_DOCS } from '../data/tmfVerifiedData';
import { MotionFocusGroup, MotionFocusItem } from './motion/MotionFocus';
import type { LegalDocument } from '../data/tmfVerifiedData';

interface BankingGatewayProps {
  onOpenDonateModal: () => void;
  onOpenDocument: (doc: LegalDocument) => void;
}

export const BankingGateway: React.FC<BankingGatewayProps> = ({
  onOpenDonateModal,
  onOpenDocument,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isQrZoomed, setIsQrZoomed] = useState<boolean>(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const passbookDoc = LEGAL_DOCS.find((d) => d.id === 'bank-passbook') || LEGAL_DOCS[0];

  return (
    <section id="banking" className="w-full py-16 lg:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-[#4b41e1] rounded-full text-xs font-bold font-label-caps uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">account_balance</span>
            <span>Statutory Banking &amp; Wire Channel</span>
          </div>

          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1e] tracking-tight">
            Official Central Bank of India Gateway
          </h2>

          <p className="font-body-lg text-base text-[#45464d] leading-relaxed">
            All direct NEFT, RTGS, IMPS wire transfers, corporate CSR allocations, and 80G tax-exempt donations are directly received in our statutory foundation account.
          </p>
        </div>

        {/* Double-Bezel Banking Card */}
        <div className="bg-[#f2f4f6] p-2 sm:p-3 rounded-[32px] max-w-4xl mx-auto shadow-xl">
          <div className="bg-white rounded-[24px] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Bank Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-[#4b41e1] flex items-center justify-center font-bold text-2xl shrink-0">
                  <span className="material-symbols-outlined text-3xl">account_balance</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-[#191c1e]">
                    {TMF_META.bank.bankName}
                  </h3>
                  <p className="font-mono text-xs text-[#64748B]">
                    {TMF_META.bank.branch}
                  </p>
                </div>
              </div>

              {/* Account Fields with Instant Copy Buttons — HorizonX MotionFocus */}
              <MotionFocusGroup className="space-y-3 font-mono text-xs">
                
                {/* Account Name */}
                <MotionFocusItem id="bank-name">
                  <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-border-subtle flex items-center justify-between">
                    <div>
                      <span className="text-[#64748B] block text-[10px] uppercase">Account Beneficiary</span>
                      <span className="font-bold text-[#191c1e] text-sm">{TMF_META.bank.accountName}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(TMF_META.bank.accountName, 'name')}
                      className="p-2 rounded-xl bg-white hover:bg-indigo-50 text-[#4b41e1] border border-border-subtle cursor-pointer text-xs font-bold"
                    >
                      {copiedField === 'name' ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </MotionFocusItem>

                {/* Account Number */}
                <MotionFocusItem id="bank-acc">
                  <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-border-subtle flex items-center justify-between">
                    <div>
                      <span className="text-[#64748B] block text-[10px] uppercase">Account Number</span>
                      <span className="font-bold text-[#191c1e] text-base sm:text-lg">{TMF_META.bank.accountNumber}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(TMF_META.bank.accountNumber, 'acc')}
                      className="p-2 rounded-xl bg-white hover:bg-indigo-50 text-[#4b41e1] border border-border-subtle cursor-pointer text-xs font-bold"
                    >
                      {copiedField === 'acc' ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </MotionFocusItem>

                {/* IFSC & MICR */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MotionFocusItem id="bank-ifsc">
                    <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-border-subtle flex items-center justify-between h-full">
                      <div>
                        <span className="text-[#64748B] block text-[10px] uppercase">IFSC Code</span>
                        <span className="font-bold text-[#191c1e] text-sm">{TMF_META.bank.ifsc}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(TMF_META.bank.ifsc, 'ifsc')}
                        className="p-1.5 rounded-lg bg-white hover:bg-indigo-50 text-[#4b41e1] border border-border-subtle cursor-pointer text-[10px] font-bold"
                      >
                        {copiedField === 'ifsc' ? 'COPIED' : 'COPY'}
                      </button>
                    </div>
                  </MotionFocusItem>

                  <MotionFocusItem id="bank-micr">
                    <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-border-subtle flex items-center justify-between h-full">
                      <div>
                        <span className="text-[#64748B] block text-[10px] uppercase">MICR Code</span>
                        <span className="font-bold text-[#191c1e] text-sm">{TMF_META.bank.micr}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(TMF_META.bank.micr, 'micr')}
                        className="p-1.5 rounded-lg bg-white hover:bg-indigo-50 text-[#4b41e1] border border-border-subtle cursor-pointer text-[10px] font-bold"
                      >
                        {copiedField === 'micr' ? 'COPIED' : 'COPY'}
                      </button>
                    </div>
                  </MotionFocusItem>
                </div>

              </MotionFocusGroup>

            </div>

            {/* Right Column: QR & Actions */}
            <div className="lg:col-span-5 bg-[#131b2e] text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between h-full space-y-6">
              
              <div className="text-center space-y-2">
                <span className="font-label-caps text-xs text-amber-300 uppercase font-bold tracking-widest">
                  Instant Wire Transfer
                </span>
                <h4 className="font-headline-md text-lg font-bold text-white">
                  Direct Bank Contribution
                </h4>
                <p className="text-xs text-slate-300">
                  Transfer from any bank app or NEFT gateway.
                </p>
              </div>

              {/* Official Central Bank QR Standee */}
              <div 
                onClick={() => setIsQrZoomed(true)}
                className="p-3 bg-white rounded-2xl text-center flex flex-col items-center justify-center max-w-[220px] mx-auto shadow-xl cursor-pointer group hover:ring-2 hover:ring-amber-400 transition-all"
                title="Click to view full high-res standee"
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                  <img
                    src={TMF_META.bank.qrImage || '/tmf-assets/tmf-qr.jpeg'}
                    alt="Tribeni Minati Foundation Central Bank UPI QR Standee"
                    className="w-full max-h-[220px] object-contain group-hover:scale-102 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                    <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                    <span>Enlarge</span>
                  </div>
                </div>
                <div className="mt-2 w-full text-center">
                  <span className="text-[10px] font-mono font-bold text-[#111827] block truncate">
                    UPI: {TMF_META.bank.upiId}
                  </span>
                  <span className="text-[9px] text-[#4b41e1] font-semibold block">
                    GPay • PhonePe • Paytm • BHIM
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onOpenDonateModal}
                  className="w-full py-3.5 bg-[#F59E0B] text-[#111827] font-extrabold rounded-xl text-xs uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer"
                >
                  Generate 80G Receipt
                </button>

                <button
                  onClick={() => onOpenDocument(passbookDoc)}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                  <span>View Verified Passbook</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* QR Full Preview Modal */}
        {isQrZoomed && (
          <div 
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setIsQrZoomed(false)}
          >
            <div 
              className="bg-white rounded-3xl p-6 max-w-sm sm:max-w-md w-full shadow-2xl space-y-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4b41e1]">qr_code_scanner</span>
                  <h3 className="font-bold text-sm text-[#191c1e]">Official Central Bank UPI QR</h3>
                </div>
                <button
                  onClick={() => setIsQrZoomed(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 flex justify-center">
                <img
                  src={TMF_META.bank.qrImage || '/tmf-assets/tmf-qr.jpeg'}
                  alt="Tribeni Minati Foundation Standee"
                  className="max-h-[500px] w-auto object-contain"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Official UPI ID</span>
                  <span className="font-mono text-xs font-bold text-[#191c1e] select-all">{TMF_META.bank.upiId}</span>
                </div>
                <button
                  onClick={() => handleCopy(TMF_META.bank.upiId, 'upi_modal')}
                  className="px-3 py-1.5 rounded-lg bg-[#4b41e1] hover:bg-[#645efb] text-white text-xs font-bold cursor-pointer"
                >
                  {copiedField === 'upi_modal' ? 'COPIED!' : 'COPY'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
