"use client"

import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

type Post = {
  title: string
  date: string
  href?: string
}

type PostsSectionProps = {
  posts: Post[]
}

export function PostsSection({ posts }: PostsSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-sm text-muted-foreground mb-3">Posts</h2>
      <div className="space-y-2">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={post.href || "#"}
            className="flex items-center gap-4 py-2 group"
          >
            <span className="text-sm group-hover:text-muted-foreground transition-colors min-w-0 flex-1">
              {post.title}
            </span>
            <span className="text-muted-foreground text-[10px] sm:text-xs whitespace-nowrap">
              {post.date}
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/posts"
        className="inline-flex items-center mt-6 text-xs text-muted-foreground hover:text-foreground"
      >
        <span>View all posts</span>
        <ArrowUpRight className="h-3 w-3 ml-1" />
      </Link>
    </div>
  )
} 