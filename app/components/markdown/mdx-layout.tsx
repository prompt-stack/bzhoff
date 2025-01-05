import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from "@/app/theme-toggle"
import { AuthorBio } from "@/app/components/ui/author-bio"
import { NewsletterSignup } from "@/app/components/newsletter-signup"
import { Footer } from "@/app/components/layout/footer"

interface MDXLayoutProps {
  children: React.ReactNode
  metadata?: {
    title?: string
    date?: string
    author?: string
    authorImage?: string
    authorBio?: string
  }
}

export function MDXLayout({ children, metadata }: MDXLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ArrowUpRight className="h-3 w-3" />
          <Link href="/posts" className="text-xs hover:text-foreground">
            Posts
          </Link>
        </nav>

        {/* Content */}
        <article className="prose prose-sm prose-gray dark:prose-invert">
          {metadata?.title && (
            <h1 className="mb-2">{metadata.title}</h1>
          )}
          {metadata?.date && (
            <div className="text-sm text-muted-foreground mb-8">
              {metadata.date}
            </div>
          )}
          {children}
        </article>

        <div className="border-t border-border/40 mt-8 pt-6">
          <NewsletterSignup />
        </div>

        {metadata?.author && (
          <AuthorBio 
            author={metadata.author}
            image={metadata.authorImage || "/images/authors/hoff-linkedin.jpg"}
            bio={metadata.authorBio}
          />
        )}

        <div className="mt-8 mb-8">
          <Link
            href="/posts"
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground"
          >
            <span>View all posts</span>
            <ArrowUpRight className="h-3 w-3 ml-1" />
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  )
} 