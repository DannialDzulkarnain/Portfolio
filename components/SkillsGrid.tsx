
import React from 'react';
import { portfolio } from '../portfolioData';

const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {portfolio.skills.map((category) => (
        <div 
          key={category.name} 
          className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all hover:border-primary-500/20 shadow-sm"
        >
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary-500 rounded-full shrink-0"></span>
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {category.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-lg md:rounded-xl text-xs md:text-sm font-medium border border-slate-100 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
