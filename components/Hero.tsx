
import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { portfolio } from '../portfolioData';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Hi, I'm {portfolio.name.split(' ')[0]}<span className="text-primary-500">.</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {portfolio.role} specializing in building <span className="text-slate-900 dark:text-white">exceptional digital experiences</span>.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
            {portfolio.tagline} Currently based in {portfolio.location}.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-500/25"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={portfolio.resumeUrl} 
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
            >
              <FileText className="w-5 h-5" /> Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">Connect</span>
            <div className="h-px w-12 bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex gap-4">
              <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={portfolio.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
