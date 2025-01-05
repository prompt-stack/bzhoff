"use client"

import React from 'react'
import { MessageCircle, Send } from 'lucide-react'
import type { PersonalProfile, CreatorProfile } from "@/app/components/profile/types"

export const profiles = {
  personal: {
    name: "Brandon Z. Hoff",
    title: "Home",
    subtitle: "AI researcher, Entrepreneur, Developer",
    mainContent: "AI researcher and self-taught developer focused on responsible AI adoption. Previously led commercial initiatives in finance and built a seven-figure e-commerce cooperative. Passionate about using technology to create meaningful impact.",
    expandedContent: [
      "Founded RUDI (Responsible Use of Digital Intelligence) to advance AI education and integration strategies. Built multiple AI-powered applications using Next.js, Python, and various AI APIs.",
      "A citizen of the world with deep interests in philosophy, theology, and learning. Having lived across Cincinnati, Tanzania, and Europe, this global perspective shapes my approach to building technology that matters."
    ],
    links: [
      { 
        title: "RUDI", 
        href: "https://rudi-ai.vercel.app",
        description: "Responsible Use of Digital Intelligence - AI research assistant",
        techStack: ["Next.js", "OpenAI", "Anthropic"]
      },
      { 
        title: "Heritage Hill", 
        href: "https://heritagehill.vercel.app",
        description: "E-commerce cooperative case study with $3M+ revenue analysis (2019-2023)",
        techStack: ["Next.js", "TypeScript", "Recharts", "Framer Motion"]
      },
      { 
        title: "Beatrice Kitchen", 
        href: "https://cook-with-beatrice.vercel.app",
        description: "AI-powered recipe extraction from cooking videos",
        techStack: ["React", "TypeScript", "Supabase", "Anthropic", "Python"]
      },
      { 
        title: "WWJD", 
        href: "https://wwjd-omega.vercel.app",
        description: "AI-powered spiritual guidance and community prayer platform",
        techStack: ["Next.js", "TypeScript", "Anthropic", "Framer Motion"]
      },
      { 
        title: "Speech to Tweet", 
        href: "#",
        description: "Cross-platform social media automation suite",
        techStack: ["Python", "Twitter API", "OpenAI"]
      },
      { 
        title: "Business Planner", 
        href: "https://smartplan-xi.vercel.app",
        description: "Interactive financial calculators for business planning",
        techStack: ["React", "Tailwind", "Radix UI", "Recharts"]
      },
      { 
        title: "Jobhoppr", 
        href: "https://jobhoppr.vercel.app",
        description: "Career transition platform for tech workers",
        techStack: ["React", "Node.js", "PostgreSQL"]
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
      "Join over 20,000 tech enthusiasts exploring the intersection of AI and the future of work."
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
        title: "Twitter",
        href: "https://twitter.com/hoffdigital",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        )
      }
    ],
    connectLinks: [
      { 
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/hoffbrandon/",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      }
    ]
  } satisfies CreatorProfile
} 