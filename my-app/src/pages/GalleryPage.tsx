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
  category: 'Education' | 'Winter Relief' | 'Healthcare' | 'Women SHG' | 'Community Feeding' | 'Facebook Feed' | 'Instagram Archive';
  location: string;
  caption: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  { id: '1', url: '/tmf-assets/real-field-photos/tmf-field-1.jpeg', title: 'Free Child Remedial Center', category: 'Education', location: 'Tribeni Hub', caption: 'Students participating in morning remedial classes with interactive learning boards.' },
  { id: '2', url: '/tmf-assets/generated/story_student_priya.jpg', title: 'Foundational Literacy Batch', category: 'Education', location: 'Mogra Center', caption: 'Rural children learning Bengali alphabet writing and arithmetic.' },
  { id: '3', url: '/tmf-assets/real-field-photos/tmf-field-3.jpg', title: 'Infant Winter Bedding Distribution', category: 'Winter Relief', location: 'Dhaniakhali', caption: 'Direct distribution of zipped infant mattress kits and warm blankets to rural mothers.' },
  { id: '4', url: '/tmf-assets/real-field-photos/tmf-field-4.jpg', title: 'Annapurna Cooked Meal Distribution', category: 'Community Feeding', location: 'Village Center', caption: 'Nutritious hot meals served to destitute elders and children.' },
  { id: '5', url: '/tmf-assets/real-field-photos/tmf-field-5.jpg', title: 'Free Health & Eye Screening Camp', category: 'Healthcare', location: 'Mogra Camp', caption: 'Free pediatric diagnostics, eye tests, and generic medicines.' },
  { id: '6', url: '/tmf-assets/real-field-photos/tmf-field-6.jpeg', title: 'Science & Drawing Workshop', category: 'Education', location: 'Tribeni Hub', caption: 'Practical model building and drawing sessions for rural youth.' },
  { id: '7', url: '/tmf-assets/real-field-photos/tmf-field-7.jpeg', title: 'Girls Mentorship Cell', category: 'Education', location: 'Tribeni Hub', caption: 'Adolescent girls guidance program ensuring retention in formal schooling.' },
  { id: '8', url: '/tmf-assets/real-field-photos/tmf-field-8.jpeg', title: 'Jotkamal Youth Sangha Coaching', category: 'Education', location: 'Jotkamal', caption: 'Weekly after-school academic support for primary students.' },
  { id: '9', url: '/tmf-assets/real-field-photos/tmf-field-9.jpeg', title: 'School Stationery & Books Kit', category: 'Education', location: 'Tribeni Hub', caption: 'Free distribution of notebooks, school bags, and geometry boxes.' },
  { id: '10', url: '/tmf-assets/real-field-photos/tmf-field-10.jpeg', title: 'Foundation Headquarters Gathering', category: 'Community Feeding', location: 'Tribeni HQ', caption: 'Community assembly and annual review meeting with village elders.' },
  { id: '11', url: '/tmf-assets/real-field-photos/tmf-field-11.jpeg', title: 'Volunteers Distributing Blankets', category: 'Winter Relief', location: 'Tarakeswar Sector', caption: 'Insulated blankets handed over to vulnerable villagers.' },
  { id: '12', url: '/tmf-assets/real-field-photos/tmf-field-12.jpeg', title: 'Women Empowerment Handloom', category: 'Women SHG', location: 'Swabhiman Center', caption: 'Rural women practicing handloom and tailoring skills.' },
  { id: '13', url: '/tmf-assets/real-field-photos/tmf-field-13.jpeg', title: 'Child Nutrition & Milk Drive', category: 'Community Feeding', location: 'Tribeni Ward', caption: 'Nutritious milk and breakfast distribution for children.' },
  { id: '14', url: '/tmf-assets/real-field-photos/tmf-field-14.jpeg', title: 'Relief Logistics Deployment', category: 'Winter Relief', location: 'Gopinagar Belt', caption: 'Volunteers coordinating emergency relief vehicle dispatch.' },
  { id: '15', url: '/tmf-assets/real-field-photos/tmf-field-15.jpeg', title: 'Creative Drawing Class', category: 'Education', location: 'Coaching Hub', caption: 'Children displaying their hand-drawn art and sketches.' },
  { id: '16', url: '/tmf-assets/real-field-photos/tmf-field-16.jpeg', title: 'Voluntary Blood Donation Camp', category: 'Healthcare', location: 'District Health Unit', caption: 'Life-saving voluntary blood donation camp for thalassemia patients.' },
  { id: '17', url: '/tmf-assets/real-field-photos/tmf-field-17.jpeg', title: 'Elderly Relief & Care Support', category: 'Winter Relief', location: 'Hooghly Rural', caption: 'Specialized blanket and care package handovers to destitute seniors.' },
  { id: '18', url: '/tmf-assets/real-field-photos/tmf-field-18.jpeg', title: 'Women Self-Help Tailoring Unit', category: 'Women SHG', location: 'Tribeni Center', caption: 'Garment stitching creating micro-entrepreneurship livelihood.' },
  { id: '19', url: '/tmf-assets/real-field-photos/tmf-field-19.jpeg', title: 'Maternal Bedding Demonstration', category: 'Healthcare', location: 'Mother Care Center', caption: 'Demonstrating zippered mosquito-net bedding for infant safety.' },
  { id: '20', url: '/tmf-assets/real-field-photos/tmf-field-20.jpeg', title: 'Foundation Day Community Meet', category: 'Community Feeding', location: 'Tribeni Office', caption: 'Annual celebration honoring grassroots volunteers and community workers.' },
  { id: '21', url: '/tmf-assets/real-field-photos/tmf-field-21.jpeg', title: 'School Bag & Slate Handover', category: 'Education', location: 'Minati Pathshala', caption: 'Smiles on children receiving new school bags and study materials.' },
  { id: '22', url: '/tmf-assets/real-field-photos/tmf-field-22.jpeg', title: 'Tribal Settlement Blanket Drive', category: 'Winter Relief', location: 'Tribal Belt', caption: 'Reaching deep mud hamlets in remote rural Bengal with winter warmers.' },
  { id: '23', url: '/tmf-assets/real-field-photos/tmf-field-23.jpeg', title: 'Emergency Medical First Aid Unit', category: 'Healthcare', location: 'Rural Health Desk', caption: 'On-spot emergency health assistance and generic medicines.' },
  { id: '24', url: '/tmf-assets/real-field-photos/tmf-field-24.jpeg', title: 'Youth Volunteer Mobilization', category: 'Education', location: 'Youth Desk', caption: 'Energetic youth brigade coordinating educational and relief drives.' },
  { id: '25', url: '/tmf-assets/real-field-photos/tmf-field-25.jpeg', title: 'Mother & Infant Health Pack', category: 'Healthcare', location: 'Maternal Wing', caption: 'High-protein baby food, sanitized linen, and neonatal health counseling.' },
  { id: '26', url: '/tmf-assets/real-field-photos/tmf-field-26.jpeg', title: 'Smiling Faces of Minati Coaching', category: 'Education', location: 'Hooghly Hub', caption: '"...your smile, our reward..." — children showing their certificates.' },
  // Downloaded Facebook Timeline & Instagram Field Assets
  { id: 'fb-1', url: '/tmf-assets/downloaded/fb_photo_2.jpg', title: 'Official Foundation Event Flex', category: 'Facebook Feed', location: 'Tribeni Office', caption: 'Official Foundation Flex Banner and registration details.' },
  { id: 'fb-2', url: '/tmf-assets/downloaded/fb_post_img_12.jpg', title: 'Facebook Live Coaching Session', category: 'Facebook Feed', location: 'Mogra Pathshala', caption: 'Ground photojournalism update from daily remedial coaching center.' },
  { id: 'fb-3', url: '/tmf-assets/downloaded/fb_post_img_13.jpg', title: 'Winter Blanket Camp Handover', category: 'Facebook Feed', location: 'Dhaniakhali', caption: 'Community blanket distribution captured live on Facebook.' },
  { id: 'fb-4', url: '/tmf-assets/downloaded/fb_post_img_14.jpg', title: 'Volunteer Relief Dispatch', category: 'Facebook Feed', location: 'Gopinagar', caption: 'Field volunteers packing and loading relief supplies.' },
  { id: 'fb-5', url: '/tmf-assets/downloaded/fb_post_img_15.jpg', title: 'Community Mid-Day Annapurna', category: 'Facebook Feed', location: 'Tribeni Belt', caption: 'Cooked midday food distribution to children and seniors.' },
  { id: 'fb-6', url: '/tmf-assets/downloaded/fb_post_img_16.jpg', title: 'Health Diagnostic Screening Camp', category: 'Facebook Feed', location: 'Rural Outreaches', caption: 'Free health consultation and blood pressure screening.' },
  { id: 'ig-1', url: '/tmf-assets/downloaded/ig_media_2.jpg', title: 'Instagram Field Dispatch: Education', category: 'Instagram Archive', location: 'Hooghly Learning Center', caption: 'Educational mentoring update shared with @minatifoundation community.' },
  { id: 'ig-2', url: '/tmf-assets/downloaded/ig_media_3.jpg', title: 'Instagram Field Dispatch: Winter Relief', category: 'Instagram Archive', location: 'Dhaniakhali Mud Hamlets', caption: 'Winter kit handover documented on Instagram.' },
  { id: 'ig-3', url: '/tmf-assets/downloaded/ig_media_4.jpg', title: 'Instagram Field Dispatch: Health Camp', category: 'Instagram Archive', location: 'Mogra Sector', caption: 'Free doctor consultation and medicine distribution.' },
  { id: 'ig-4', url: '/tmf-assets/downloaded/ig_media_6.jpg', title: 'Instagram Field Dispatch: Women SHG', category: 'Instagram Archive', location: 'Swabhiman Center', caption: 'Women tailoring and livelihood batch in session.' },
  { id: 'ig-5', url: '/tmf-assets/downloaded/ig_media_7.jpg', title: 'Instagram Field Dispatch: Nutrition Pack', category: 'Instagram Archive', location: 'Tribeni Ward', caption: 'Nutrition packet distribution for infants and elderly.' },
  { id: 'ig-6', url: '/tmf-assets/downloaded/ig_media_8.jpg', title: 'Instagram Field Dispatch: Youth Desk', category: 'Instagram Archive', location: 'Tribeni HQ', caption: 'Youth volunteers preparing educational kits for field schools.' },
  { id: 'ig-7', url: '/tmf-assets/downloaded/ig_media_10.jpg', title: 'Instagram Field Dispatch: Annual Review', category: 'Instagram Archive', location: 'Corporate Office', caption: 'Board members and volunteers reviewing field impact metrics.' },
  { id: 'ig-8', url: '/tmf-assets/downloaded/ig_media_12.jpg', title: 'Instagram Field Dispatch: Child Smile', category: 'Instagram Archive', location: 'Hooghly Hub', caption: 'Pure happiness: children receiving new school bags and slates.' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenDonate }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [previewPhoto, setPreviewPhoto] = useState<PhotoItem | null>(null);

  const categories = ['All', 'Education', 'Winter Relief', 'Healthcare', 'Women SHG', 'Community Feeding', 'Facebook Feed', 'Instagram Archive'];

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
              <span>40+ Verified Field &amp; Social Assets (FB &amp; IG Synced)</span>
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
