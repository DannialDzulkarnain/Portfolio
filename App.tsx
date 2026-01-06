
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import { portfolio } from './portfolioData';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary-500/30 selection:text-primary-900 dark:selection:text-primary-100">
      <Navbar />
      
      <main>
        <Hero />

        <Section 
          id="projects" 
          title="Featured Projects" 
          subtitle="A selection of recent works, from SaaS platforms to AI integrations, focusing on performance and user engagement."
          lightBg
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {portfolio.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
          <div className="text-center">
            <a 
              href={portfolio.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              See more on GitHub 
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Section>

        <Section 
          id="experience" 
          title="Professional Journey" 
          subtitle="My track record in building scalable systems and leading technical teams across various industries."
        >
          <ExperienceTimeline />
        </Section>

        <Section 
          id="skills" 
          title="Technical Toolkit" 
          subtitle="The technologies and tools I leverage daily to build modern, performant web applications."
          lightBg
        >
          <SkillsGrid />
        </Section>

        <Section id="contact" title="Get In Touch">
          <div className="bg-primary-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-center text-white relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 relative z-10 leading-tight">
              Ready to build something <br className="hidden sm:block" /> amazing together?
            </h3>
            <p className="text-primary-100 text-base md:text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <a 
                href={`mailto:${portfolio.email}`}
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-50 transition-all shadow-xl active:scale-95"
              >
                <Mail className="w-5 h-5" /> Say Hello
              </a>
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <a 
                  href={portfolio.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 active:scale-95"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={portfolio.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 active:scale-95"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-xl font-bold text-slate-900 dark:text-white">
              {portfolio.name.split(' ')[0]}<span className="text-primary-500">.</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with precision.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-primary-500 transition-colors">Projects</a>
            <a href="#experience" className="text-sm font-medium text-slate-500 hover:text-primary-500 transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium text-slate-500 hover:text-primary-500 transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-primary-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
