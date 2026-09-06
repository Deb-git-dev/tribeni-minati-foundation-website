import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GridSweepContainer, GridSweepItem } from './motion/GridSweep';

interface FacebookPostItem {
  id: string;
  author: string;
  authorBadge: string;
  timestamp: string;
  location: string;
  text: string;
  bengaliText: string;
  category: 'Winter Relief' | 'Education' | 'Women Empowerment' | 'Nutrition' | 'Health Camps';
  imagePath: string;
  likes: number;
  comments: number;
  shares: number;
  fbPostUrl: string;
}

const FB_POSTS_DATA: FacebookPostItem[] = [
  {
    id: 'field-1',
    author: 'Tribeni Minati Foundation',
    authorBadge: 'Official Non-Profit',
    timestamp: 'Ground Update 2026',
    location: 'Mogra Remedial Coaching Hub, Hooghly',
    text: 'Free Remedial Education Class in full session: Mentoring underprivileged primary & secondary students in Mathematics, Science, and English with free notebooks & breakfast.',
    bengaliText: 'মিনতি অবৈতনিক শিক্ষা নিকেতনে শিশুদের পাঠদান, পাঠ্যপুস্তক ও পুষ্টিকর খাবার বিতরণ।',
    category: 'Education',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-1.jpeg',
    likes: 248,
    comments: 42,
    shares: 68,
    fbPostUrl: 'https://www.facebook.com/tribeniminatifoundation/',
  },
  {
    id: 'field-2',
    author: 'Tribeni Minati Foundation',
    authorBadge: 'Official Non-Profit',
    timestamp: 'Education Mission',
    location: 'Tribeni Free Coaching Center',
    text: 'Daily after-school coaching sessions for children of daily-wage earners to prevent school dropouts.',
    bengaliText: 'শ্রেণিকক্ষে শিক্ষার্থীদের পাঠদান ও নিয়মিত মেধা বিকাশ কর্মসূচি।',
    category: 'Education',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-2.jpeg',
    likes: 195,
    comments: 31,
    shares: 54,
    fbPostUrl: 'https://www.facebook.com/tribeniminatifoundation/',
  },
  {
    id: 'field-3',
    author: 'Tribeni Minati Foundation',
    authorBadge: 'Official Non-Profit',
    timestamp: 'Winter Relief Mission',
    location: 'Radhanagar Mud Hamlets, Dhaniakhali',
    text: 'Infant Winter Bedding & Blanket Distribution: Handing over thermal insulated zipped mattress kits to rural mothers.',
    bengaliText: 'মা ও নবজাতক শিশুদের মাঝে সুরক্ষিত জিপারযুক্ত বেডিং ও কম্বল প্রদান।',
    category: 'Winter Relief',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-3.jpg',
    likes: 312,
    comments: 64,
    shares: 98,
    fbPostUrl: 'https://www.facebook.com/tribeniminatifoundation/',
  },
  {
    id: 'field-4',
    author: 'Tribeni Minati Foundation',
    authorBadge: 'Official Non-Profit',
    timestamp: 'Nutritional Relief',
    location: 'Village Community Feeding Center',
    text: 'Daily morning nutritious meals & dry ration support for destitute families and children.',
    bengaliText: 'গ্রামীণ পুষ্টি কর্মসূচি — অসহায় শিশুদের পুষ্টিকর খাবার বিতরণ।',
    category: 'Nutrition',
    imagePath: '/tmf-assets/generated/community_food_relief.jpg',
    likes: 218,
    comments: 38,
    shares: 62,
    fbPostUrl: 'https://www.facebook.com/tribeniminatifoundation/',
  },
  {
    id: 'field-5',
    author: 'Tribeni Minati Foundation',
    authorBadge: 'Official Non-Profit',
    timestamp: 'Healthcare Outreach',
    location: 'Mogra & Tribeni Diagnostic Saturday Camp',
    text: 'Free Comprehensive Eye & General Health Screening: Doctor consultations and free prescribed medicines.',
    bengaliText: 'বিনামূল্যে চক্ষু পরীক্ষা ও অভিজ্ঞ চিকিৎসকদের দ্বারা স্বাস্থ্য শিবির।',
    category: 'Health Camps',
    imagePath: '/tmf-assets/generated/rural_medical_camp.jpg',
    likes: 274,
    comments: 49,
    shares: 83,
    fbPostUrl: 'https://www.facebook.com/tribeniminatifoundation/',
  },
  {
    id: 'field-6',
    author: 'Tribeni Minati Foundation',
    authorBadge: 'Official Non-Profit',
    timestamp: 'Women Empowerment',
    location: 'Tribeni Stitching & Jute Center',
    text: 'Vocational tailoring workshop for rural women: Free machine training and market linkages.',
    bengaliText: 'মহিলা স্বনির্ভর সেলাই ও পাটের ব্যাগ তৈরির প্রশিক্ষণ কর্মশালা।',
    category: 'Women Empowerment',
    imagePath: '/tmf-assets/generated/women_tailoring_hub.jpg',
    likes: 256,
    comments: 37,
    shares: 72,
    fbPostUrl: 'https://www.facebook.com/tribeniminatifoundation/',
  },
];

interface FacebookLiveGallery3DProps {
  onOpenDonate?: () => void;
}

export const FacebookLiveGallery3D: React.FC<FacebookLiveGallery3DProps> = ({ onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<FacebookPostItem | null>(null);

  const categories = ['All', 'Education', 'Winter Relief', 'Health Camps', 'Women Empowerment', 'Nutrition'];

  const filteredPosts =
    selectedCategory === 'All'
      ? FB_POSTS_DATA
      : FB_POSTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="facebook-feed" className="w-full py-16 lg:py-24 bg-[#f7f9fb] border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#1877F2] rounded-full text-xs font-bold font-label-caps uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[16px]">public</span>
              <span>Official Facebook Field Feed · ফেসবুক আপডেট</span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1e] tracking-tight">
              Real-Time Grassroots Field Journal
            </h2>
            <p className="font-body-base text-base text-[#45464d] mt-2">
              Verified ground photojournalism documenting our daily remedial coaching, winter bedding relief, and rural health drives across Hooghly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://www.facebook.com/tribeniminatifoundation/photos_by"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-[#1877F2] font-bold rounded-xl border border-slate-200/80 shadow-xs text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">photo_library</span>
              <span>All Photos</span>
            </a>
            <a
              href="https://www.facebook.com/tribeniminatifoundation/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-[#EA580C] font-bold rounded-xl border border-slate-200/80 shadow-xs text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">movie</span>
              <span>Reels</span>
            </a>
            <a
              href="https://www.instagram.com/minatifoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-bold rounded-xl shadow-xs text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/tribeniminatifoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold rounded-xl shadow-md text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Follow Page</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#111827] text-white shadow-md'
                  : 'bg-white text-[#45464d] hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Double-Bezel Facebook Posts Grid — HorizonX GridSweep */}
        <GridSweepContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {filteredPosts.map((post) => (
            <GridSweepItem
              key={post.id}
              className="bg-[#f2f4f6] p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="bg-white rounded-[22px] p-6 flex flex-col justify-between h-full space-y-4">
                
                {/* Header author info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-border-subtle p-0.5 shrink-0">
                    <img
                      src="/tmf-assets/minati-badges/tmf-circular-emblem.png"
                      alt="TMF"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline-md text-sm font-bold text-[#191c1e] truncate">
                        {post.author}
                      </span>
                      <span className="material-symbols-outlined text-[#1877F2] text-[16px] shrink-0">
                        verified
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-[#64748B] flex items-center gap-2">
                      <span>{post.timestamp}</span>
                      <span>·</span>
                      <span className="truncate">{post.location}</span>
                    </div>
                  </div>
                </div>

                {/* Post Bengali & English text */}
                <div className="space-y-1.5">
                  <p className="font-headline-md text-xs font-semibold text-[#191c1e] leading-snug">
                    {post.bengaliText}
                  </p>
                  <p className="font-body-base text-xs text-[#45464d] line-clamp-3 leading-relaxed">
                    {post.text}
                  </p>
                </div>

                {/* Field Image with Lightbox click */}
                <div
                  onClick={() => setActivePost(post)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group/img"
                >
                  <img
                    src={post.imagePath}
                    alt={post.text}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-3xl">zoom_in</span>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-lg text-[10px] font-mono text-white font-bold">
                    {post.category}
                  </div>
                </div>

                {/* Facebook Social Engagement Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[#64748B] text-xs font-mono">
                  <div className="flex items-center gap-1 text-blue-600 font-bold">
                    <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">comment</span>
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">share</span>
                    <span>{post.shares}</span>
                  </div>
                  <a
                    href={post.fbPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] font-bold hover:underline flex items-center gap-0.5 text-[11px]"
                  >
                    <span>View Post</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>

              </div>
            </GridSweepItem>
          ))}
        </GridSweepContainer>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-auto max-h-[88vh] flex flex-col"
            >
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-sm font-bold text-[#191c1e]">
                    {activePost.location}
                  </span>
                  <span className="px-2 py-0.5 bg-blue-100 text-[#1877F2] rounded-full text-[10px] font-mono font-bold">
                    {activePost.category}
                  </span>
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>

              <div className="p-4 sm:p-6 space-y-4 flex-1 overflow-y-auto">
                <div className="aspect-[16/10] max-h-[38vh] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={activePost.imagePath}
                    alt={activePost.text}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-headline-md text-base font-bold text-[#191c1e]">
                    {activePost.bengaliText}
                  </h4>
                  <p className="font-body-base text-xs text-[#45464d] leading-relaxed">
                    {activePost.text}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                <a
                  href={activePost.fbPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1"
                >
                  <span>Open on Facebook Official Page</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
                {onOpenDonate && (
                  <button
                    onClick={() => {
                      setActivePost(null);
                      onOpenDonate();
                    }}
                    className="px-6 py-2.5 bg-[#F59E0B] text-[#111827] font-extrabold rounded-xl text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Support This Cause
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
