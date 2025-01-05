import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { ThemeToggle } from "@/app/theme-toggle"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Breadcrumb */}
        <nav className="container max-w-3xl mx-auto px-4 py-8 flex items-center gap-2 text-muted-foreground">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">Documentation</span>
        </nav>

        {children}

        {/* Footer */}
        <footer className="container max-w-3xl mx-auto px-4 py-8 flex items-center justify-between border-t border-border/40">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full" />
            <span className="text-sm">built by bzhoff with love</span>
          </div>
          <ThemeToggle />
        </footer>
      </main>
    </div>
  )
} 