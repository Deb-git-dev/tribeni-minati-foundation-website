import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  QrCode, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  FileDown, 
  Copy, 
  Check, 
  Building2, 
  Smartphone 
} from 'lucide-react';
import { TMF_META } from '../data/tmfVerifiedData';
import { generate80GCertificatePdf, download80GCertificate } from '../lib/certificateGenerator';
import { tmfBackend } from '../services/backend';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  initialPillar?: string;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 5000,
  initialPillar = 'General Impact Fund (Where needed most)',
}) => {
  const [frequency, setFrequency] = useState<'monthly' | 'onetime'>('onetime');
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [pillar, setPillar] = useState<string>(initialPillar);
  const [step, setStep] = useState<'input' | 'payment_details' | 'receipt'>('input');
  const [paymentChannel, setPaymentChannel] = useState<'qr' | 'bank'>('qr');
  const [utrNumber, setUtrNumber] = useState<string>('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [paymentId, setPaymentId] = useState<string>('');

  const [donorData, setDonorData] = useState({
    name: '',
    email: '',
    phone: '',
    panNumber: '',
  });

  useEffect(() => {
    if (initialAmount) setAmount(initialAmount);
    if (initialPillar) setPillar(initialPillar);
  }, [initialAmount, initialPillar, isOpen]);

  if (!isOpen) return null;

  const presetAmounts =
    frequency === 'monthly'
      ? [1200, 1500, 2000, 3500, 5000]
      : [1000, 2500, 5000, 10000, 25000, 50000];

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(parseInt(val, 10));
    }
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount < 100) return;
    setStep('payment_details');
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleConfirmTransfer = async () => {
    setIsProcessing(true);
    const finalTxn = utrNumber.trim() || `TMF-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setPaymentId(finalTxn);
    setStep('receipt');
    setIsProcessing(false);
    await tmfBackend.processDonation({
      donorName: donorData.name || 'Anonymous Supporter',
      donorEmail: donorData.email || '',
      donorPhone: donorData.phone || '',
      panNumber: donorData.panNumber || 'ABCDE1234F',
      amount,
      frequency,
      cause: pillar,
      paymentMethod: paymentChannel === 'qr' ? 'UPI' : 'Direct Transfer',
      paymentId: finalTxn,
    });
  };

  const handleDownloadDirect80G = async () => {
    setIsGeneratingPdf(true);
    try {
      const pdfBytes = await generate80GCertificatePdf({
        id: `don_${Date.now()}`,
        paymentId: paymentId || `pay_${Date.now()}`,
        amount,
        currency: 'INR',
        donorName: donorData.name || 'Valued Supporter',
        donorEmail: donorData.email || '',
        donorPhone: donorData.phone || '',
        donorPan: (donorData.panNumber || 'ABCDE1234F').toUpperCase(),
        donorAddress: 'West Bengal, India',
        cause: pillar,
        date: new Date().toISOString(),
        certificateNumber: receiptNumber,
      });

      download80GCertificate(pdfBytes, `${receiptNumber}.pdf`);
    } catch (err) {
      console.error('PDF error:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleReset = () => {
    setStep('input');
    setIsProcessing(false);
    onClose();
  };

  const receiptNumber = `80G-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
  const upiId = TMF_META.bank.upiId || '20260933445145-iservuqrsbrp@cbin';
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(TMF_META.name)}&am=${amount}&cu=INR&tn=${encodeURIComponent('80G Contribution to ' + pillar)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-black/[0.08] overflow-hidden z-10 my-auto text-[#151C18] max-h-[88vh] flex flex-col"
        >
          {/* Header (Sticky at top of modal) */}
          <div className="bg-[#111A15] p-5 sm:p-6 text-white relative shrink-0">
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Section 80G Tax Deductible</span>
            </div>
            <h3 className="font-['DM_Serif_Display'] text-2xl">
              {step === 'receipt' ? 'Thank You for Your Support' : 'Support Our Mission'}
            </h3>
            <p className="text-xs text-white/70 mt-1">
              Tribeni Minati Foundation · Govt. Reg: {TMF_META.newRegNo}
            </p>
          </div>

          {/* Body Content (Scrollable) */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-1">
            {step === 'input' && (
              <form onSubmit={handleProceedToPayment} className="space-y-5">
                {/* Frequency Toggle */}
                <div className="flex p-1 bg-black/[0.04] rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setFrequency('onetime')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      frequency === 'onetime'
                        ? 'bg-white text-[#1B3B2B] shadow-xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    One-Time Impact
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      frequency === 'monthly'
                        ? 'bg-white text-[#1B3B2B] shadow-xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Monthly Sustainer
                  </button>
                </div>

                {/* Preset Amount Grid */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Select Contribution Amount (INR)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {presetAmounts.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handlePresetSelect(val)}
                        className={`py-3 px-2 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                          amount === val && !customAmount
                            ? 'bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-sm'
                            : 'bg-white text-slate-800 border-black/[0.08] hover:border-black/[0.2]'
                        }`}
                      >
                        ₹{val.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                      ₹
                    </span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="e.g. 15000"
                      className="w-full pl-8 pr-4 py-3 rounded-2xl bg-white border border-black/[0.08] text-sm font-bold text-[#151C18] focus:outline-hidden focus:border-[#1B3B2B]"
                    />
                  </div>
                </div>

                {/* Pillar Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Direct Contribution To
                  </label>
                  <select
                    value={pillar}
                    onChange={(e) => setPillar(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-[#191c1e] focus:outline-hidden focus:border-[#4b41e1]"
                  >
                    <option value="General Impact Fund (Where needed most)">
                      General Impact Fund (Where needed most)
                    </option>
                    <option value="Free Child Remedial Education Coaching Center">
                      Free Child Remedial Education Coaching Center (Mogra/Tribeni)
                    </option>
                    <option value="Infant Winter Bedding & Blanket Distribution Relief">
                      Infant Winter Bedding &amp; Blanket Distribution Relief (Dhaniakhali)
                    </option>
                    <option value="Rural Diagnostic Health & Mobile Eye Camps">
                      Rural Diagnostic Health &amp; Mobile Eye Camps (Hooghly)
                    </option>
                    <option value="Women SHG Tailoring & Jute Craft Center">
                      Women SHG Tailoring &amp; Jute Craft Center (Tribeni)
                    </option>
                    <option value="Voluntary Blood Donation & Emergency Support Cell">
                      Voluntary Blood Donation &amp; Emergency Support Cell
                    </option>
                    <option value="Emergency Food Security & Annadaan Relief">
                      Emergency Food Security &amp; Annadaan Relief
                    </option>
                  </select>
                </div>

                {/* Donor Details for 80G */}
                <div className="space-y-3 pt-2 border-t border-black/[0.06]">
                  <div className="text-[11px] font-bold text-[#1B3B2B] uppercase tracking-wider">
                    Donor Details (For Section 80G Tax Exemption Receipt)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      placeholder="Full Name (as on PAN)"
                      value={donorData.name}
                      onChange={(e) => setDonorData({ ...donorData, name: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl bg-white border border-black/[0.08] text-xs text-[#151C18] focus:outline-hidden focus:border-[#1B3B2B]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={donorData.email}
                      onChange={(e) => setDonorData({ ...donorData, email: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl bg-white border border-black/[0.08] text-xs text-[#151C18] focus:outline-hidden focus:border-[#1B3B2B]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={donorData.phone}
                      onChange={(e) => setDonorData({ ...donorData, phone: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl bg-white border border-black/[0.08] text-xs text-[#151C18] focus:outline-hidden focus:border-[#1B3B2B]"
                    />
                    <input
                      type="text"
                      maxLength={10}
                      placeholder="PAN Number (Mandatory for 80G)"
                      value={donorData.panNumber}
                      onChange={(e) => setDonorData({ ...donorData, panNumber: e.target.value.toUpperCase() })}
                      className="px-3.5 py-2.5 rounded-xl bg-white border border-black/[0.08] text-xs text-[#151C18] font-mono uppercase focus:outline-hidden focus:border-[#1B3B2B]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#1B3B2B] hover:bg-[#26533D] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#1B3B2B]/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                >
                  <span>Proceed to Donate ₹{amount.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === 'payment_details' && (
              <div className="space-y-4">
                {/* Contribution Summary */}
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono block">
                      Target Contribution ({frequency === 'monthly' ? 'Monthly' : 'One-Time'})
                    </span>
                    <span className="text-xs text-[#1B3B2B] font-semibold block truncate max-w-[200px] sm:max-w-xs">
                      {pillar}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-['DM_Serif_Display'] text-2xl text-[#1B3B2B]">
                      ₹{amount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-mono block font-bold">
                      50% Sec 80G Tax-Saved
                    </span>
                  </div>
                </div>

                {/* Channel Switcher Tabs */}
                <div className="flex p-1 bg-black/[0.05] rounded-2xl gap-1">
                  <button
                    type="button"
                    onClick={() => setPaymentChannel('qr')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentChannel === 'qr'
                        ? 'bg-[#1B3B2B] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Central Bank UPI QR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentChannel('bank')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentChannel === 'bank'
                        ? 'bg-[#1B3B2B] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Direct Bank Wire (NEFT)</span>
                  </button>
                </div>

                {/* 1. Official QR Standee Display */}
                {paymentChannel === 'qr' && (
                  <div className="space-y-3.5 text-center">
                    <div className="p-3 bg-white rounded-2xl border border-black/[0.08] inline-block shadow-sm max-w-[230px] mx-auto">
                      <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                        <img 
                          src="/tmf-assets/tmf-qr.jpeg" 
                          alt="Official Central Bank of India UPI QR Standee" 
                          className="w-full max-h-[240px] object-contain mx-auto"
                        />
                      </div>
                      <div className="text-[10px] font-mono font-bold text-[#1B3B2B] mt-2 truncate">
                        {TMF_META.name}
                      </div>
                    </div>

                    {/* Copy UPI ID Bar */}
                    <div className="p-3 bg-white rounded-xl border border-black/[0.08] flex items-center justify-between gap-2 max-w-md mx-auto">
                      <div className="text-left overflow-hidden">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono block">
                          Official UPI ID
                        </span>
                        <span className="font-mono text-xs font-bold text-[#151C18] truncate block select-all">
                          {upiId}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(upiId, 'upi')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold cursor-pointer shrink-0 flex items-center gap-1 transition-colors"
                      >
                        {copiedField === 'upi' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedField === 'upi' ? 'COPIED' : 'COPY'}</span>
                      </button>
                    </div>

                    {/* Quick App Launcher */}
                    <div className="flex justify-center gap-2">
                      <a
                        href={upiDeepLink}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold hover:bg-amber-100 transition-colors"
                      >
                        <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                        <span>Pay via UPI App (GPay / PhonePe / Paytm / BHIM)</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* 2. Direct Bank Wire Display */}
                {paymentChannel === 'bank' && (
                  <div className="space-y-2.5">
                    <div className="p-4 bg-white rounded-2xl border border-black/[0.08] space-y-3 font-mono text-xs">
                      {/* Beneficiary Name */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase block">Account Beneficiary</span>
                          <span className="font-bold text-[#151C18] text-sm">{TMF_META.bank.accountName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(TMF_META.bank.accountName, 'acc_name')}
                          className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-[#151C18] text-[11px] font-bold cursor-pointer"
                        >
                          {copiedField === 'acc_name' ? 'COPIED' : 'COPY'}
                        </button>
                      </div>

                      {/* Bank & Branch */}
                      <div className="pb-2 border-b border-slate-100">
                        <span className="text-[10px] text-slate-500 uppercase block">Bank &amp; Branch</span>
                        <span className="font-bold text-[#151C18] block">{TMF_META.bank.bankName}</span>
                        <span className="text-[11px] text-slate-600 block">{TMF_META.bank.branch}</span>
                      </div>

                      {/* Account Number */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase block">Account Number</span>
                          <span className="font-bold text-emerald-800 text-base select-all">{TMF_META.bank.accountNumber}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(TMF_META.bank.accountNumber, 'acc_num')}
                          className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-[#151C18] text-[11px] font-bold cursor-pointer"
                        >
                          {copiedField === 'acc_num' ? 'COPIED' : 'COPY'}
                        </button>
                      </div>

                      {/* IFSC & MICR */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                          <div>
                            <span className="text-[9px] text-slate-500 uppercase block">IFSC Code</span>
                            <span className="font-bold text-xs text-[#151C18] select-all">{TMF_META.bank.ifsc}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(TMF_META.bank.ifsc, 'ifsc')}
                            className="text-[10px] text-indigo-600 font-bold hover:underline cursor-pointer"
                          >
                            {copiedField === 'ifsc' ? '✓' : 'COPY'}
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                          <div>
                            <span className="text-[9px] text-slate-500 uppercase block">MICR Code</span>
                            <span className="font-bold text-xs text-[#151C18] select-all">{TMF_META.bank.micr}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(TMF_META.bank.micr, 'micr')}
                            className="text-[10px] text-indigo-600 font-bold hover:underline cursor-pointer"
                          >
                            {copiedField === 'micr' ? '✓' : 'COPY'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* UTR / Transaction Reference & Confirm */}
                <div className="pt-2 space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      UTR / Transaction Reference (Optional)
                    </label>
                    <input
                      type="text"
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value)}
                      placeholder="e.g. UPI Ref / Bank UTR Number"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs font-mono text-[#151C18] focus:outline-hidden focus:border-[#1B3B2B]"
                    />
                  </div>

                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={handleConfirmTransfer}
                    className="w-full py-4 rounded-full bg-[#1B3B2B] hover:bg-[#26533D] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#1B3B2B]/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                  >
                    <span>{isProcessing ? 'Verifying...' : 'I Have Transferred Contribution → Generate 80G Receipt'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('input')}
                    className="text-xs text-slate-500 hover:text-slate-900 font-semibold cursor-pointer block mx-auto pt-1"
                  >
                    ← Change Amount or Details
                  </button>
                </div>
              </div>
            )}

            {step === 'receipt' && (
              <div className="space-y-5 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-['DM_Serif_Display'] text-2xl text-[#151C18]">
                    Contribution Confirmed!
                  </h4>
                  <p className="text-xs text-[#5C6760]">
                    Your generous donation has been credited to Tribeni Minati Foundation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-black/[0.08] text-left text-xs space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Receipt No:</span>
                    <span className="font-bold text-[#151C18]">{receiptNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Transaction ID:</span>
                    <span className="font-bold text-slate-700">{paymentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Amount:</span>
                    <span className="font-bold text-emerald-800">₹{amount.toLocaleString('en-IN')}/-</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tax Exemption:</span>
                    <span className="font-bold text-amber-900">50% under Sec 80G(5)(vi)</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    disabled={isGeneratingPdf}
                    onClick={handleDownloadDirect80G}
                    className="w-full py-3.5 rounded-full bg-[#1B3B2B] hover:bg-[#26533D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all disabled:opacity-50"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download Official 80G Certificate (PDF)'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-900 font-semibold cursor-pointer"
                  >
                    Close &amp; Return to Website
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
