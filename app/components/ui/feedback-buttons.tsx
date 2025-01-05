'use client'

import { cn } from "@/lib/utils"
import { useState } from 'react'

interface FeedbackButtonsProps {
  className?: string
  maxClaps?: number
}

export function FeedbackButtons({ className, maxClaps = 50 }: FeedbackButtonsProps) {
  const [claps, setClaps] = useState(0)

  const handleClap = () => {
    if (claps < maxClaps) {
      setClaps(prev => prev + 1)
    }
  }

  return (
    <div className={cn(
      "flex items-center gap-1.5",
      className
    )}>
      <button 
        onClick={handleClap}
        disabled={claps >= maxClaps}
        className={cn(
          "inline-flex items-center gap-1.5 p-1.5 rounded-md transition-colors text-xs",
          claps > 0
            ? "bg-pink-500/10 text-pink-500"
            : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground",
          claps >= maxClaps && "opacity-50 cursor-not-allowed"
        )}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="h-3.5 w-3.5"
          fill="currentColor"
          stroke="none"
        >
          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
        </svg>
        {claps >= maxClaps ? "So much love!" : "Show some love"}
      </button>
      {claps > 0 && (
        <span className="text-xs text-muted-foreground">
          {claps === maxClaps ? "You're amazing! 💖" : claps}
        </span>
      )}
    </div>
  )
} 