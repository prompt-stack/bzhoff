'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"

interface TagsProps {
  tags: string[]
  className?: string
  linkPrefix?: string
}

export function Tags({ tags, className, linkPrefix = '/tags' }: TagsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 my-6", className)}>
      {tags.map(tag => (
        <Link
          key={tag}
          href={`${linkPrefix}/${tag.toLowerCase().replace(/ /g, '-')}`}
          className="inline-flex items-center px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-colors text-muted-foreground hover:text-foreground"
        >
          {tag}
        </Link>
      ))}
    </div>
  )
} 