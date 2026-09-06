import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GridSweepContainer, GridSweepItem } from '../components/motion/GridSweep';
import { MotionFocusGroup, MotionFocusItem } from '../components/motion/MotionFocus';
import type { PageId } from '../types';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

interface PhotoItem {
  id: string;
  url: string;
  title: string;
  category: 'Education' | 'Winter Relief' | 'Healthcare' | 'Women SHG' | 'Community Feeding' | 'On-Ground Proof';
  location: string;
  caption: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  // Education
  { id: 'edu-1', url: '/tmf-assets/generated/gallery_education_stem.jpg', title: 'Interactive Science & Math Workshop', category: 'Education', location: 'Mogra Learning Center', caption: 'Rural primary students exploring hands-on science models and abacus arithmetic.' },
  { id: 'edu-2', url: '/tmf-assets/generated/gallery_school_supplies.jpg', title: 'School Bag & Study Kits Distribution', category: 'Education', location: 'Tribeni Hub', caption: 'First-generation learners joyfully receiving new backpacks, Bengali exercise books, and geometry kits.' },
  { id: 'edu-3', url: '/tmf-assets/generated/story_student_priya.jpg', title: 'Foundational Bengali Literacy Batch', category: 'Education', location: 'Minati Pathshala, Mogra', caption: 'After-school remedial coaching helping children master reading and numeracy.' },
  { id: 'edu-4', url: '/tmf-assets/generated/education-banyan.jpg', title: 'Open-Air Heritage Schooling', category: 'Education', location: 'Dhaniakhali Rural', caption: 'Dedicated community classes under the village banyan tree for underserved youth.' },
  { id: 'edu-5', url: '/tmf-assets/generated/hero_child_education.jpg', title: 'First-Generation Learner Mentorship', category: 'Education', location: 'Hooghly Rural Belt', caption: 'Individualized academic attention ensuring school retention and zero dropout.' },

  // Winter Relief
  { id: 'wnt-1', url: '/tmf-assets/generated/gallery_winter_elderly.jpg', title: 'Winter Blanket & Quilt Handover', category: 'Winter Relief', location: 'Tarakeswar Sector', caption: 'Volunteers wrapping thick insulated blankets around vulnerable village elders on chilly mornings.' },
  { id: 'wnt-2', url: '/tmf-assets/generated/winter_infant_bedding.jpg', title: 'Infant Warm Bedding & Mosquito Net Drive', category: 'Winter Relief', location: 'Dhaniakhali Mud Hamlets', caption: 'Handing over zippered infant mattress kits and warm wraps to rural mothers.' },
  { id: 'wnt-3', url: '/tmf-assets/generated/winter-relief.jpg', title: 'Cold Wave Emergency Relief', category: 'Winter Relief', location: 'Hooghly Outreaches', caption: 'Direct door-to-door distribution of woolen wear to elderly and destitute families.' },
  { id: 'wnt-4', url: '/tmf-assets/downloaded/fb_post_img_12.jpg', title: 'Stage Handover: Infant Mattress Kits', category: 'Winter Relief', location: 'Sajal Mancha, Khanpur', caption: 'Real ground documentary: distribution of protective infant bedding kits to village mothers.' },
  { id: 'wnt-5', url: '/tmf-assets/downloaded/fb_post_img_13.jpg', title: 'Mother & Newborn Care Kit Delivery', category: 'Winter Relief', location: 'Khanpur Durgatala', caption: 'Executive committee members presenting sanitized bedding packets to mothers.' },

  // Healthcare
  { id: 'hlth-1', url: '/tmf-assets/generated/gallery_health_pediatric.jpg', title: 'Free Pediatric & Maternal Health Camp', category: 'Healthcare', location: 'Rural Hooghly Clinic', caption: 'Free pediatric diagnostics, growth monitoring, and generic medicine distribution by medical doctors.' },
  { id: 'hlth-2', url: '/tmf-assets/generated/rural_medical_camp.jpg', title: 'Comprehensive Village Health Screening', category: 'Healthcare', location: 'Mogra Outreach', caption: 'On-spot blood pressure, sugar screening, and general physician consultations.' },
  { id: 'hlth-3', url: '/tmf-assets/generated/blood_donation_camp.jpg', title: 'Voluntary Blood Donation Drive', category: 'Healthcare', location: 'Tribeni Sub-Division', caption: 'Life-saving community blood donation drive in aid of regional thalassemia patients.' },
  { id: 'hlth-4', url: '/tmf-assets/generated/story_elderly_artisan.jpg', title: 'Artisan Eye Screening & Spectacles Support', category: 'Healthcare', location: 'Dhaniakhali Weavers Hub', caption: 'Free refractive eye examination and corrective spectacles for aging rural artisans.' },
  { id: 'hlth-5', url: '/tmf-assets/generated/rural-health.jpg', title: 'First Aid & Diagnostic Guidance Unit', category: 'Healthcare', location: 'Community Health Desk', caption: 'Preventative healthcare awareness and referral assistance for rural families.' },

  // Women SHG
  { id: 'shg-1', url: '/tmf-assets/generated/gallery_women_handicraft.jpg', title: 'Swabhiman Handicraft & Kantha Workshop', category: 'Women SHG', location: 'Swabhiman Center, Tribeni', caption: 'Rural women training in traditional Kantha embroidery, jute bag crafting, and micro-enterprise.' },
  { id: 'shg-2', url: '/tmf-assets/generated/women_tailoring_hub.jpg', title: 'Professional Tailoring Machine Batch', category: 'Women SHG', location: 'Livelihood Training Center', caption: 'Skill development through pedal and motor sewing machines for sustainable household income.' },
  { id: 'shg-3', url: '/tmf-assets/generated/women-tailoring.jpg', title: 'Garment Stitching & Self-Reliance Cell', category: 'Women SHG', location: 'Tribeni Ward', caption: 'Mastering pattern cutting and garment stitching to foster financial independence.' },

  // Community Feeding
  { id: 'feed-1', url: '/tmf-assets/generated/gallery_community_kitchen.jpg', title: 'Annapurna Midday Meal Distribution', category: 'Community Feeding', location: 'Village Primary Hub', caption: 'Volunteers serving hot, nutritious khichdi and fresh meals on eco-friendly leaf plates.' },
  { id: 'feed-2', url: '/tmf-assets/generated/community_food_relief.jpg', title: 'Community Nourishment Drive', category: 'Community Feeding', location: 'Tribeni Center', caption: 'Wholesome cooked food packages provided to destitute seniors and underprivileged children.' },

  // On-Ground Proof
  { id: 'og-1', url: '/tmf-assets/downloaded/fb_post_img_14.jpg', title: 'Field Volunteers Assembling Infant Kits', category: 'On-Ground Proof', location: 'Sajal Mancha, Khanpur', caption: 'Unedited ground photograph: local volunteers managing infant bedding distribution.' },
  { id: 'og-2', url: '/tmf-assets/downloaded/fb_post_img_15.jpg', title: 'Elder Dignitary Presenting Bedding Kit', category: 'On-Ground Proof', location: 'Khanpur Ground', caption: 'Documented field photo: village elder presenting zippered bedding to a rural mother.' },
  { id: 'og-3', url: '/tmf-assets/downloaded/fb_post_img_16.jpg', title: 'Newborn Bedding Handover Ceremony', category: 'On-Ground Proof', location: 'Sajal Mancha, Khanpur', caption: 'Unedited field record: committee member presenting protected bedding set to beneficiary.' },
  { id: 'og-4', url: '/tmf-assets/real-field-photos/tmf-field-21.jpeg', title: 'Official Event Invitation (আমন্ত্রণ পত্র)', category: 'On-Ground Proof', location: 'Sajal Mancha, Khanpur', caption: 'Official Bengali printed invitation letter for the 20 Dec 2025 infant bedding event.' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenDonate }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [previewPhoto, setPreviewPhoto] = useState<PhotoItem | null>(null);

  const categories = ['All', 'Education', 'Winter Relief', 'Healthcare', 'Women SHG', 'Community Feeding', 'On-Ground Proof'];

  const filtered = selectedCat === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCat);

  useEffect(() => {
    if (!previewPhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewPhoto(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewPhoto]);

  return (
    <div className="w-full pt-20 bg-[#f7f9fb] min-h-screen text-[#191c1e]">
      
      {/* Page Header */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-[#4b41e1] rounded-full text-xs font-bold font-label-caps uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">photo_library</span>
              <span>Verified Field &amp; Documentary Impact Records</span>
            </div>

            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#191c1e] tracking-tight leading-tight">
              Visual Records of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b41e1] to-[#645efb]">
                Grassroots Service.
              </span>
            </h1>

            <p className="font-body-lg text-base sm:text-lg text-[#45464d] leading-relaxed">
              Explore photographic proof from our daily remedial coaching centers, winter infant relief deployments, mobile doctor clinics, and women tailoring units in Bengal.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/tribeniminatifoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white border border-border-subtle rounded-2xl font-bold text-xs uppercase tracking-wider text-[#1877F2] hover:bg-slate-50 transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Facebook Live Media</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
            <button
              onClick={onOpenDonate}
              className="px-8 py-4 bg-[#F59E0B] text-[#111827] font-extrabold rounded-2xl shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:-translate-y-1 transition-all cursor-pointer text-xs uppercase tracking-wider"
            >
              Donate Now (80G)
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#111827] text-white shadow-md'
                  : 'bg-white text-[#45464d] border border-border-subtle hover:bg-slate-50'
              }`}
            >
              {cat === 'All' ? `All Photos (${GALLERY_PHOTOS.length})` : `${cat}`}
            </button>
          ))}
        </div>
      </section>

      {/* Photojournalism Grid — HorizonX GridSweep & MotionFocus */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 pb-24">
        <MotionFocusGroup>
          <GridSweepContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" stagger={0.06}>
            {filtered.map((photo) => (
              <GridSweepItem key={photo.id}>
                <MotionFocusItem id={photo.id}>
                  <div
                    onClick={() => setPreviewPhoto(photo)}
                    className="bg-[#f2f4f6] p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 flex flex-col justify-between h-full"
                  >
                    <div className="bg-white rounded-[20px] overflow-hidden p-3 flex flex-col h-full justify-between">
                      <div>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-3">
                          <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-full font-label-caps text-[9px] text-[#4b41e1] font-bold">
                              {photo.category}
                            </span>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-[#64748B] mb-1">
                          {photo.location}
                        </div>

                        <h3 className="font-headline-md text-sm font-bold text-[#191c1e] line-clamp-1 group-hover:text-[#4b41e1]">
                          {photo.title}
                        </h3>

                        <p className="font-body-base text-xs text-[#45464d] line-clamp-2 mt-1">
                          {photo.caption}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-[#4b41e1]">
                        <span>Enlarge Record</span>
                        <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                      </div>
                    </div>
                  </div>
                </MotionFocusItem>
              </GridSweepItem>
            ))}
          </GridSweepContainer>
        </MotionFocusGroup>
      </section>

      {/* Lightbox Preview Modal */}
      {previewPhoto && typeof document !== 'undefined' && createPortal(
        <div
          onClick={() => setPreviewPhoto(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-5 sm:p-7 max-w-3xl w-full shadow-2xl relative my-auto max-h-[88vh] flex flex-col overflow-hidden cursor-default"
          >
            <button
              onClick={() => setPreviewPhoto(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#191c1e] hover:bg-slate-200 cursor-pointer z-20 shadow-xs"
            >
              ✕
            </button>

            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
              <div className="w-full max-h-[38vh] aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 relative flex items-center justify-center shrink-0">
                <img
                  src={previewPhoto.url}
                  alt={previewPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-indigo-50 text-[#4b41e1] rounded-full text-xs font-bold font-label-caps">
                    {previewPhoto.category}
                  </span>
                  <span className="font-mono text-xs text-[#64748B]">
                    {previewPhoto.location}
                  </span>
                </div>

                <h2 className="font-headline-lg text-xl sm:text-2xl font-bold text-[#191c1e]">
                  {previewPhoto.title}
                </h2>

                <p className="font-body-base text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  {previewPhoto.caption}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={() => {
                    onOpenDonate();
                    setPreviewPhoto(null);
                  }}
                  className="flex-1 py-3.5 bg-[#F59E0B] text-[#111827] font-extrabold rounded-2xl text-xs uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer"
                >
                  Sponsor This Cause (80G)
                </button>
                <a
                  href={previewPhoto.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#191c1e] font-bold rounded-2xl text-xs uppercase tracking-wider text-center"
                >
                  Download Asset
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
