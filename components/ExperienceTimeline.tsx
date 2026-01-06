
import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolio } from '../portfolioData';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
      {portfolio.experience.map((exp, idx) => (
        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Icon node */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Briefcase className="w-5 h-5" />
          </div>

          {/* Content card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary-500/30 transition-colors shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{exp.role}</div>
              <time className="text-xs font-bold uppercase tracking-widest text-primary-500">{exp.dates}</time>
            </div>
            <div className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">{exp.company}</div>
            <ul className="space-y-3">
              {exp.bulletPoints.map((point, pIdx) => (
                <li key={pIdx} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex gap-2">
                  <span className="text-primary-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
