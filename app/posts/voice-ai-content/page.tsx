import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { ThemeToggle } from "../../theme-toggle"
import { posts } from "@/app/data/posts"

export default function PostPage() {
  const post = posts.find(p => p.slug === 'voice-ai-content')
  
  if (!post) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/posts" className="text-xs hover:text-foreground">
            Posts
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">{post.title}</span>
        </nav>

        <article className="prose prose-sm prose-gray dark:prose-invert max-w-none">
          <h1 className="text-2xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>

          <div className="text-base leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </article>

        {/* Footer */}
        <footer className="flex items-center justify-between pt-8 mt-8 border-t">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full" />
            <span>TMS</span>
          </div>
          <ThemeToggle />
        </footer>
      </main>
    </div>
  )
}

