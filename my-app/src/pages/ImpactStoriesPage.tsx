import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { STORIES_OF_CHANGE } from '../data/foundationData';
import { GridSweepContainer, GridSweepItem } from '../components/motion/GridSweep';
import { MotionFocusGroup, MotionFocusItem } from '../components/motion/MotionFocus';
import type { PageId, StoryItem } from '../types';

interface ImpactStoriesPageProps {
  onNavigate?: (page: PageId) => void;
  onOpenDonate: (presetAmount?: number, cause?: string) => void;
}

export const ImpactStoriesPage: React.FC<ImpactStoriesPageProps> = ({ onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  const categories = ['All', 'Healthcare', 'Education', 'Winter Relief', 'Women Empowerment', 'Farming & Livelihood'];

  const filteredStories =
    selectedCategory === 'All'
      ? STORIES_OF_CHANGE
      : STORIES_OF_CHANGE.filter((s) => s.category === selectedCategory);

  useEffect(() => {
    if (!activeStory) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveStory(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStory]);

  return (
    <div className="w-full pt-20 bg-[#f7f9fb] min-h-screen text-[#191c1e]">
      
      {/* Hero Header */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-[#4b41e1] rounded-full text-xs font-bold font-label-caps uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">record_voice_over</span>
              <span>Voices of Grassroots Transformation</span>
            </div>

            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#191c1e] tracking-tight leading-tight">
              Real Work. Real Change. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b41e1] to-[#645efb]">
                Human Stories of Hope.
              </span>
            </h1>

            <p className="font-body-lg text-base sm:text-lg text-[#45464d] leading-relaxed">
              Documentary accounts of individuals and community collectives whose lives were transformed by Minati free education coaching, neonatal winter infant bedding, and mobile clinical care.
            </p>
          </div>

          <button
            onClick={() => onOpenDonate(5000, 'Support Grassroots Stories of Change')}
            className="px-8 py-4 bg-[#F59E0B] text-[#111827] font-extrabold rounded-2xl shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:-translate-y-1 transition-all cursor-pointer text-xs uppercase tracking-wider shrink-0"
          >
            Sponsor a Life Story
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#111827] text-white shadow-md'
                  : 'bg-white text-[#45464d] border border-border-subtle hover:bg-slate-50'
              }`}
            >
              {cat === 'All' ? 'All Stories' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Stories Bento Grid — HorizonX GridSweep & MotionFocus */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 pb-24">
        <MotionFocusGroup>
          <GridSweepContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
            {filteredStories.map((story) => {
              const photo = story.imageUrl || '/tmf-assets/real-field-photos/tmf-field-1.jpeg';
              return (
                <GridSweepItem key={story.id}>
                  <MotionFocusItem id={story.id}>
                    <div
                      onClick={() => setActiveStory(story)}
                      className="bg-[#f2f4f6] p-2 sm:p-3 rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full"
                    >
                      <div className="bg-white rounded-[24px] overflow-hidden p-6 flex flex-col h-full justify-between">
                        <div>
                          {/* Photo with double-bezel style */}
                          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
                            <img
                              src={photo}
                              alt={story.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-label-caps text-[10px] text-[#4b41e1] font-bold">
                                {story.category}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B] mb-2">
                            <span className="material-symbols-outlined text-[16px] text-[#4b41e1]">location_on</span>
                            <span>{story.location}</span>
                          </div>

                          <h3 className="font-headline-md text-xl font-bold text-[#191c1e] mb-2 group-hover:text-[#4b41e1] transition-colors leading-snug">
                            {story.title}
                          </h3>

                          <p className="font-body-base text-xs font-semibold text-[#64748B] mb-3">
                            {story.beneficiaryName} {story.age ? `(${story.age} yrs)` : ''}
                          </p>

                          <p className="font-body-base text-sm text-[#45464d] line-clamp-3 leading-relaxed">
                            {story.afterTransformation}
                          </p>
                        </div>

                        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#4b41e1]">
                            Read Documentary Proof
                          </span>
                          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#191c1e] group-hover:bg-[#111827] group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </MotionFocusItem>
                </GridSweepItem>
              );
            })}
          </GridSweepContainer>
        </MotionFocusGroup>
      </section>

      {/* Story Full Modal */}
      {activeStory && typeof document !== 'undefined' && createPortal(
        <div
          onClick={() => setActiveStory(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto cursor-default"
          >
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#191c1e] hover:bg-slate-200 cursor-pointer z-10"
            >
              ✕
            </button>

            <div className="space-y-6">
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={activeStory.imageUrl || '/tmf-assets/real-field-photos/tmf-field-1.jpeg'}
                  alt={activeStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-label-caps text-xs text-[#4b41e1] font-bold">
                    {activeStory.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[#4b41e1] font-bold">
                  {activeStory.location}
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#191c1e]">
                  {activeStory.title}
                </h2>
                <p className="font-mono text-xs text-[#64748B]">
                  Beneficiary: {activeStory.beneficiaryName} {activeStory.age ? `(${activeStory.age} yrs)` : ''}
                </p>
              </div>

              {/* Bengali Quote Callout */}
              {activeStory.quote && (
                <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-[#191c1e] space-y-2">
                  <span className="material-symbols-outlined text-[#4b41e1] text-3xl">format_quote</span>
                  <p className="font-headline-md text-base italic font-semibold text-[#191c1e]">
                    "{activeStory.quote}"
                  </p>
                </div>
              )}

              <div className="space-y-4 text-[#45464d] font-body-base text-sm sm:text-base leading-relaxed">
                <div>
                  <strong className="text-[#191c1e] block mb-1">Challenge:</strong>
                  <p>{activeStory.beforeSituation}</p>
                </div>
                <div>
                  <strong className="text-[#191c1e] block mb-1">Intervention &amp; Outcome:</strong>
                  <p>{activeStory.afterTransformation}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    onOpenDonate(5000, `Support: ${activeStory.title}`);
                    setActiveStory(null);
                  }}
                  className="flex-1 py-4 bg-[#F59E0B] text-[#111827] font-extrabold rounded-2xl text-xs uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer"
                >
                  Sponsor Similar Initiative
                </button>
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-[#191c1e] font-bold rounded-2xl text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
