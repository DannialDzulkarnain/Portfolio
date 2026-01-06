
import React from 'react';
import { portfolio } from '../portfolioData';

const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {portfolio.skills.map((category) => (
        <div 
          key={category.name} 
          className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all hover:border-primary-500/20 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-medium border border-slate-100 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
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
