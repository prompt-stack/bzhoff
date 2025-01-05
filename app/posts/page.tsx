'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronRight, X } from 'lucide-react'
import { PageContainer } from "@/app/components/layout/page-container"
import { Footer } from "@/app/components/layout/footer"
import { posts, getAllCategories } from "@/app/data/posts"
import { Button } from "@/app/components/ui/button"

export default function PostsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const categories = getAllCategories()

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts

  return (
    <PageContainer>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-muted-foreground mb-6">
        <Link href="/" className="text-xs hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-xs">Posts</span>
      </nav>
      
      <div className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight mb-6 text-muted-foreground">Posts</h1>
        
        {/* Categories */}
        <div className="mb-6">
          <div className="text-xs text-muted-foreground mb-3">Filter by category</div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "outline"}
                size="sm"
                className="h-6 text-[10px] px-2"
                onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
              >
                {category}
                {selectedCategory === category && (
                  <X className="ml-1 h-2.5 w-2.5" />
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {filteredPosts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="flex flex-col gap-1 py-2 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors min-w-0 flex-1">
                  {post.title}
                </span>
                <span className="text-muted-foreground text-[10px] whitespace-nowrap tabular-nums">
                  {post.date}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground/60">
                {post.category}
              </span>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No posts found for selected categories.
          </p>
        )}
      </div>
      <Footer />
    </PageContainer>
  )
}

