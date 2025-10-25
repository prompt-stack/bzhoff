import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Atlas: Reddit Analysis | AI Writer',
  description: 'Analysis of Reddit discussions about ChatGPT\'s cultural impact, synthesizing multiple threads to identify patterns in public perception and emerging concerns about AI adoption.',
  keywords: ['ChatGPT', 'Reddit analysis', 'AI culture', 'data synthesis', 'AI trends', 'social media analysis'],
  openGraph: {
    title: 'ChatGPT Atlas: Reddit Analysis',
    description: 'Analyzing Reddit discussions about ChatGPT\'s cultural impact',
    url: 'https://bzhoff.com/essays/chatgpt-atlas',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Atlas: Reddit Analysis',
    description: 'Analyzing Reddit discussions about ChatGPT\'s cultural impact',
  }
}

export default function ChatGPTAtlas() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/essays" className="text-xs hover:text-foreground">
            AI Writer
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">ChatGPT Atlas</span>
        </nav>
      </div>

      {/* Essay Content (iframe full width) */}
      <iframe
        src="/essays/chatgpt-atlas/index.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          border: 'none',
          display: 'block'
        }}
        title="ChatGPT Atlas: Reddit Analysis"
      />
    </div>
  )
}
