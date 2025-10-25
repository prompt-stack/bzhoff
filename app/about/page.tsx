import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from "@/app/components/primitives"
import { Footer } from "@/app/components/features"
import { Timeline } from "@/app/components/composed"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Brandon Z. Hoff | AI Literacy Researcher',
  description: 'AI literacy researcher and founder of RUDI (Responsible Use of Digital Intelligence). 8,000+ hours mastering AI, teaching 80,000+ people to build software with AI. Background in e-commerce, finance, and global business.',
  keywords: [
    'Brandon Hoff bio',
    'AI literacy researcher',
    'RUDI founder',
    'AI education',
    'AI training expert',
    'full-stack developer',
    'AI-powered development',
    'technology democratization'
  ],
  openGraph: {
    title: 'About Brandon Z. Hoff | AI Literacy Researcher',
    description: 'AI literacy researcher and RUDI founder teaching people to build software with AI',
    url: 'https://bzhoff.com/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Brandon Z. Hoff | AI Literacy Researcher',
    description: 'AI literacy researcher and RUDI founder teaching people to build software with AI',
  }
}

const timelineItems = [
  {
    year: "2022-Present",
    title: "AI Literacy Research & RUDI",
    description: "After ChatGPT's release, dedicated over 8,000 hours to mastering AI technologies. Founded RUDI (Responsible Use of Digital Intelligence) to advance AI literacy and responsible adoption, developing original frameworks and training programs. Built a community of 80,000+ tech enthusiasts while creating AI-powered solutions."
  },
  {
    year: "2019-2023",
    title: "Founded Heritage Hill LLC",
    description: "Built a seven-figure e-commerce cooperative specializing in collegiate textiles. Secured 30+ collegiate licenses, managed 20 cooperative members, and featured in GQ and Essence Magazine. Raised $500K in seed funding and secured $300K in retail partnerships."
  },
  {
    year: "2016-2019",
    title: "Payment Services & Analytics",
    description: "Led product management for payment processing services, conducting advanced analytics using R and SQL. Developed data-driven strategies for payment systems optimization and merchant services."
  },
  {
    year: "2016",
    title: "MBA & Global Experience",
    description: "Earned MBA from EDHEC Business School in France. Led sustainability initiatives in Tanzania and South Africa, and pitched to VCs in Silicon Valley, expanding global business perspective."
  },
  {
    year: "2015",
    title: "First E-commerce Success",
    description: "Founded and successfully exited an e-commerce business specializing in hoverboard chargers and Amazon-eBay arbitrage, marking first entrepreneurial acquisition."
  },
  {
    year: "2013-2014",
    title: "Global Supply Chain at Macy's",
    description: "Led sourcing and procurement strategies, focusing on supply chain transformation and global operations optimization."
  },
  {
    year: "2012",
    title: "Early Tech Development",
    description: "Started learning web development and Python programming, creating Monte Carlo simulations for Vegas betting analytics, marking first steps into technical development."
  },
  {
    year: "2010",
    title: "Microsoft Marketing Specialist",
    description: "Member of the Surface tablet launch team, contributing to Microsoft's innovative hardware rollout strategy."
  },
  {
    year: "2006-2009",
    title: "Retail Banking Leadership",
    description: "Progressed through banking roles to branch management, developing expertise in financial operations and team leadership."
  },
  {
    year: "2004-2005",
    title: "Gaming Industry Pioneer",
    description: "Professional gamer and co-founder of a subscription-based gaming platform, later acquired by SportsGamer, demonstrating early entrepreneurial success."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">About</span>
        </nav>

        <div className="mb-16">
          <Image
            src="/images/authors/hoff-linkedin.jpg"
            alt="Brandon Hoff"
            width={96}
            height={96}
            className="rounded-lg mb-6"
          />
          <h1 className="text-2xl font-semibold mb-6">About Me</h1>
          
          <div className="prose prose-sm prose-gray dark:prose-invert">
            <p className="text-base mb-4">
              I'm an AI literacy researcher and the founder of RUDI (Responsible Use of Digital Intelligence). My mission is simple: democratize access to technology by teaching non-technical individuals how to build sophisticated software using AI tools.
            </p>

            <p className="text-base mb-4">
              After ChatGPT's release in 2022, I dedicated over 8,000 hours to mastering AI technologies and understanding their transformative potential. What I discovered changed everything: generative AI makes programming accessible to creative people who never went to computer science school. If you have ideas and want to build digital products, AI can help you bring them to life.
            </p>

            <p className="text-base mb-8">
              Today, I lead a community of 80,000+ tech enthusiasts, develop AI-powered solutions, and create frameworks for responsible AI adoption. My diverse background—spanning e-commerce ($3M cooperative), finance, and global business experience across Cincinnati, Tanzania, and Europe—informs my belief that linguistic capital and programming shouldn't be gatekept. AI changes everything.
            </p>

            <h2 className="mb-6">Journey & Accomplishments</h2>
            <Timeline items={timelineItems} className="mb-8" />

            <h2>Technical Skills</h2>
            <p>
              Through immersive learning with AI tools, I've developed proficiency in full-stack development using Next.js, React, Python, and various AI APIs. This technical foundation enables me to build practical solutions that bridge traditional business needs with emerging technologies.
            </p>

            <h2>Philosophy</h2>
            <p>
              As a citizen of the world who has lived across Cincinnati, Tanzania, and Europe, I bring a global perspective to technology development. My interests in philosophy, theology, and continuous learning drive my approach to creating technology that matters and empowers others.
            </p>

            <h2>Beyond Work</h2>
            <p>
              I'm deeply committed to sharing knowledge and building communities around responsible AI use. Through social media and speaking engagements, I help others understand and leverage AI tools effectively, focusing on both technical implementation and ethical considerations.
            </p>

            <h2 className="!mt-12">Get in Touch</h2>
            <div className="flex flex-col gap-4 not-prose">
              <Link 
                href="mailto:brandonzhoff@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                brandonzhoff@gmail.com
              </Link>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <Link href="https://github.com/prompt-stack" target="_blank">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <Link href="https://www.linkedin.com/in/hoffbrandon/" target="_blank">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}

