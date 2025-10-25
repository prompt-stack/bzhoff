"use client"

import React from 'react'
import { Mail } from 'lucide-react'
import type { PersonalProfile, CreatorProfile } from "@/app/components/features/profile/types"

export const profiles = {
  personal: {
    name: "Brandon Z. Hoff",
    title: "Home",
    subtitle: "AI Literacy Researcher, Entrepreneur, Developer",
    mainContent: "I believe technology should be accessible to everyone. Generative AI makes programming possible for creative people who never went to computer science school—if you have ideas and want to build digital products, AI can help you bring them to life. That's what I do, and here's what I've built.",
    expandedContent: [
      "Founded RUDI (Responsible Use of Digital Intelligence) to advance AI literacy and democratize technology access. I use AI daily to build real products—SaaS platforms, content systems, developer tools—proving that anyone with creativity and drive can create sophisticated software.",
      "My background spans e-commerce ($3M cooperative), finance, and global experience across Cincinnati, Tanzania, and Europe. This diversity shapes my belief: linguistic capital and programming shouldn't be gatekept. AI changes everything."
    ],
    links: [
      // AI LITERACY MISSION
      {
        title: "RUDI",
        href: "https://github.com/prompt-stack/rudi",
        description: "Responsible Use of Digital Intelligence - AI literacy framework and training platform",
        techStack: ["AI Curriculum", "Training Programs", "Education"],
        category: "mission"
      },
      {
        title: "Upskill Ohio",
        href: "https://github.com/prompt-stack/upskill-ohio",
        description: "Commercial AI training platform - TechCred funding resource for Ohio workforce development",
        techStack: ["HTML", "CSS", "JavaScript"],
        category: "mission"
      },
      {
        title: "OTES Pro",
        href: "https://github.com/prompt-stack/otes-pro",
        description: "AI-powered teacher evaluation SaaS - saves evaluators 50% of time ($1.50/eval, 92% margins)",
        techStack: ["Next.js", "FastAPI", "Claude AI", "Whisper"],
        category: "mission"
      },

      // COMMERCIAL PROJECTS
      {
        title: "Heritage Hill",
        href: "https://heritagehill.vercel.app",
        description: "E-commerce cooperative case study with $3M+ revenue analysis (2019-2023)",
        techStack: ["Next.js", "TypeScript", "Recharts"],
        category: "commercial"
      },
      {
        title: "WWJD",
        href: "https://wwjd-omega.vercel.app",
        description: "AI-powered spiritual guidance and community prayer platform",
        techStack: ["Next.js", "Anthropic", "Community"],
        category: "commercial"
      },
      {
        title: "Content Engine",
        href: "https://github.com/prompt-stack/content-engine",
        description: "Multi-platform content extraction API for Reddit, TikTok, YouTube, and articles",
        techStack: ["Python", "FastAPI", "PostgreSQL"],
        category: "commercial"
      },

      // TECHNICAL PORTFOLIO
      {
        title: "AI Writer",
        href: "/essays",
        description: "Automated trend detection and research synthesis - monitors AI conversations to generate essays",
        techStack: ["AI Research", "Content Generation", "Trend Analysis"],
        category: "technical"
      },
      {
        title: "Content Stack",
        href: "https://github.com/prompt-stack/content-stack",
        description: "AI-powered content management system with 36+ React components",
        techStack: ["React", "TypeScript", "Vite"],
        category: "technical"
      },
      {
        title: "Grammar Ops",
        href: "https://github.com/prompt-stack/grammar-ops",
        description: "LLM-native codebase grammar system - 75x token reduction through metadata-driven navigation",
        techStack: ["Shell", "Code Analysis", "LLM"],
        category: "technical"
      },
      {
        title: "VAPI",
        href: "https://github.com/prompt-stack/vapi",
        description: "Voice AI integration platform with 69 components for telephony and voice assistants",
        techStack: ["JavaScript", "Voice AI", "Telephony"],
        category: "technical"
      },
    ]
  } satisfies PersonalProfile,
  creator: {
    name: "@hoffdigital",
    title: "Creator Profile",
    subtitle: "tech · dev · society",
    mainContent: "I create content exploring how AI will impact the way we live, learn, and work. My focus is on demystifying technology to help people elevate their professional lives. I'm building the next generation of full-stack creators, showing non-technical individuals how to accelerate their learning and master software development with AI.",
    expandedContent: [
      "Through content, education, and community building, I guide the next generation of learners and builders in using AI tools to transform their capabilities.",
      "Join over 80,000 tech enthusiasts exploring the intersection of AI and the future of work."
    ],
    socialLinks: [
      { 
        title: "TikTok",
        href: "https://tiktok.com/@hoffdigital",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-1.23-1.34-1.55-2.916-1.644-3.575h.004c-.01-.044-.018-.088-.027-.132v-.59h-3.685v13.534c0 .59-.005 1.179-.026 1.766-.02.547-.237 1.058-.6 1.478-.988 1.146-2.698.965-3.375.73-.82-.283-1.452-.922-1.638-1.71-.322-1.367.318-2.798 1.578-3.407.395-.19.828-.3 1.27-.32.362-.015.723.033 1.067.142v-3.86a7.576 7.576 0 0 0-1.655.034c-.97.13-1.91.444-2.772.925-1.474.83-2.7 2.116-3.363 3.607-.766 1.71-.892 3.837-.063 5.693.814 1.814 2.306 3.214 4.145 3.791.965.304 2.02.446 3.116.422 1.047-.022 2.078-.216 3.036-.568 1.418-.522 2.657-1.496 3.484-2.745.599-.906.968-1.93 1.083-2.992.088-.81.098-1.639.098-2.455l-.006-5.847c.58.358 1.127.635 1.627.815 1.116.4 2.27.622 3.432.66v-3.685c-.513-.04-1.017-.15-1.506-.327z"/>
          </svg>
        )
      },
      { 
        title: "YouTube",
        href: "https://youtube.com/@hoffdigital",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        )
      }
    ],
    connectLinks: [
      {
        title: "Email",
        href: "mailto:brandonzhoff@gmail.com",
        icon: <Mail className="h-4 w-4" />,
      },
      { 
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/hoffbrandon/",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      },
      { 
        title: "Twitter",
        href: "https://twitter.com/hoffdigital",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        )
      }
    ]
  } satisfies CreatorProfile
} 