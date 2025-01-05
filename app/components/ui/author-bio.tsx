'use client'

import Image from 'next/image'
import { cn } from "@/lib/utils"

interface AuthorBioProps {
  author: string
  image: string
  bio?: string
  className?: string
}

export function AuthorBio({ author, image, bio, className }: AuthorBioProps) {
  return (
    <div className={cn(
      "flex items-center gap-4 my-6 p-4 bg-secondary/30 rounded-lg border border-border/40",
      className
    )}>
      <Image
        src={image}
        alt={author}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <h3 className="text-sm font-medium">{author}</h3>
        <p className="text-xs text-muted-foreground mt-1">
          {bio || 'AI researcher and technology consultant specializing in the future of work.'}
        </p>
      </div>
    </div>
  )
} 