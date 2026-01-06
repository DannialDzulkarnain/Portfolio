
import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { portfolio } from '../portfolioData';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background decoration - Adjusted for better mobile positioning */}
      <div className="absolute top-1/4 right-[-10%] w-48 h-48 md:w-72 md:h-72 bg-primary-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
            Hi, I'm {portfolio.name.split(' ')[0]}<span className="text-primary-500">.</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {portfolio.role} specializing in building <span className="text-slate-900 dark:text-white underline decoration-primary-500/30 decoration-4">exceptional digital experiences</span>.
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
            {portfolio.tagline} Currently based in {portfolio.location}.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/25 active:scale-95"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={portfolio.resumeUrl} 
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              <FileText className="w-5 h-5" /> Resume
            </a>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-[10px] md:text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap">Connect</span>
            <div className="h-px w-8 md:w-12 bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex gap-4">
              <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href={portfolio.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
