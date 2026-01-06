
import { PortfolioData } from './types';

export const portfolio: PortfolioData = {
  name: "Alex Rivera",
  role: "Senior Full Stack Engineer",
  tagline: "I build scalable, human-centric web applications that drive business impact and deliver exceptional user experiences.",
  location: "San Francisco, CA",
  email: "alex.rivera.dev@example.com",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  resumeUrl: "#", // Add your actual resume link here
  projects: [
    {
      title: "Pulse SaaS Dashboard",
      description: "A real-time monitoring dashboard for cloud infrastructure that reduced incident response time by 35% through proactive alerting and intuitive data visualization.",
      tech: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS", "Supabase"],
      liveUrl: "https://pulse-dashboard-demo.vercel.app",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      title: "ContentMind AI",
      description: "An AI-powered content generation platform using LLMs to help marketing teams scale their output by 4x while maintaining consistent brand voice.",
      tech: ["React", "Gemini API", "Node.js", "Prisma", "PostgreSQL"],
      liveUrl: "https://content-mind-ai.vercel.app",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      title: "EcoCommerce Engine",
      description: "A headless e-commerce framework optimized for sustainability metrics, featuring sub-second page loads and integrated carbon tracking for every shipment.",
      tech: ["Next.js", "Shopify API", "Stripe", "Framer Motion"],
      liveUrl: "https://eco-commerce-alpha.vercel.app",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      title: "TaskFlow Pro",
      description: "A collaborative project management tool designed for remote-first teams, facilitating seamless communication and dependency tracking.",
      tech: ["React", "Redux Toolkit", "Firebase", "WebSockets"],
      liveUrl: "https://taskflow-pro.vercel.app",
      repoUrl: "https://github.com",
      featured: false
    }
  ],
  experience: [
    {
      role: "Senior Full Stack Engineer",
      company: "InnovateTech Solutions",
      dates: "Jan 2021 - Present",
      bulletPoints: [
        "Architected a multi-tenant SaaS platform serving 50k+ daily active users, improving system uptime to 99.99%.",
        "Led a team of 5 frontend developers to migrate a legacy codebase to Next.js, reducing bundle size by 45%.",
        "Implemented automated CI/CD pipelines on Vercel, decreasing deployment cycle time from 2 days to 15 minutes."
      ]
    },
    {
      role: "Software Engineer",
      company: "CloudStream Systems",
      dates: "Jun 2018 - Dec 2020",
      bulletPoints: [
        "Developed core video streaming features that handled over 10TB of data monthly with minimal latency.",
        "Refactored the internal component library, ensuring WCAG 2.1 accessibility compliance across all products.",
        "Collaborated with product designers to implement a new design system that increased user engagement by 22%."
      ]
    },
    {
      role: "Frontend Developer",
      company: "StartUp Genesis",
      dates: "Jan 2016 - May 2018",
      bulletPoints: [
        "Built 10+ responsive landing pages for various client MVPs using React and Styled Components.",
        "Integrated payment gateways (Stripe, PayPal) for 5 different e-commerce applications.",
        "Optimized SEO and Core Web Vitals, resulting in a 30% increase in organic search traffic."
      ]
    }
  ],
  skills: [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "D3.js"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "Prisma", "Supabase", "Redis"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Vercel", "AWS", "Docker", "Git", "CI/CD", "Jest", "Cypress"]
    }
  ]
};
