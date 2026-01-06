
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  lightBg?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', lightBg = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 px-4 sm:px-6 lg:px-8 ${lightBg ? 'bg-slate-50 dark:bg-slate-900/50' : 'bg-white dark:bg-slate-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {title}<span className="text-primary-500">.</span>
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
