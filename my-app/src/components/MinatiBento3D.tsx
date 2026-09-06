import React from 'react';
import { MINATI_ACRONYM } from '../data/tmfVerifiedData';
import { GridSweepContainer, GridSweepItem } from './motion/GridSweep';

export const MinatiBento3D: React.FC = () => {
  const icons = ['groups', 'menu_book', 'volunteer_activism', 'health_and_safety', 'nature_people', 'public'];

  return (
    <section className="w-full py-16 lg:py-32 bg-[#f2f4f6]/50 backdrop-blur-sm reveal active">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:w-2/3 reveal active">
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#191c1e] mb-4">
            Our Guiding Pillars
          </h2>
          <p className="font-body-lg text-lg text-[#45464d] text-balance">
            The M-I-N-A-T-I framework dictates our operational focus, ensuring resources are directed where they create the most profound impact.
          </p>
        </div>

        {/* 6 Bento Pillar Cards — HorizonX GridSweep */}
        <GridSweepContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.09}>
          {MINATI_ACRONYM.map((item, index) => (
            <GridSweepItem key={item.letter + item.word}>
              <div
                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-[#4b41e1] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <span className="material-symbols-outlined text-[28px]">
                        {icons[index % icons.length]}
                      </span>
                    </div>
                    
                    {/* Official Letter & Emblem Monogram */}
                    <div className="w-12 h-12 rounded-xl bg-[#f7f9fb] border border-border-subtle shadow-xs flex items-center justify-center group-hover:border-[#4b41e1]/30 transition-colors">
                      <span className="font-display-lg text-lg font-extrabold text-[#1B3B2B] group-hover:text-[#4b41e1] transition-colors">
                        {item.letter}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-headline-md text-2xl font-bold text-[#191c1e] mb-2 flex items-center gap-2">
                    <span>{item.word}</span>
                    <span className="text-[11px] font-mono text-[#4b41e1] bg-indigo-50 px-2.5 py-0.5 rounded-full font-bold">
                      Pillar {item.letter}
                    </span>
                  </h3>

                  <p className="font-body-base text-sm text-[#45464d] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-[#64748B]">
                  <span className="font-bold text-[#4b41e1]">{item.stat}</span>
                  <span>Verified Metric</span>
                </div>
              </div>
            </GridSweepItem>
          ))}
        </GridSweepContainer>

      </div>
    </section>
  );
};
