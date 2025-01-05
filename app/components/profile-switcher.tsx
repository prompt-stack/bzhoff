"use client"

import Link from "next/link"
import { ChevronRight, User, Pencil } from 'lucide-react'
import { Switch } from "@/app/components/ui/switch"

type ProfileSwitcherProps = {
  isCreatorProfile: boolean
  onProfileChange: (checked: boolean) => void
}

export function ProfileSwitcher({ isCreatorProfile, onProfileChange }: ProfileSwitcherProps) {
  return (
    <nav className="flex items-center justify-between text-muted-foreground mb-8">
      <div className="flex items-center gap-2">
        <Link 
          href="/" 
          className="text-xs hover:text-foreground"
          onClick={() => onProfileChange(false)}
        >
          Home
        </Link>
        {isCreatorProfile && (
          <>
            <ChevronRight className="h-3 w-3" />
            <span className="text-xs">Creator</span>
          </>
        )}
      </div>
      <div className="relative flex items-center">
        <div className="flex items-center gap-1.5 px-2">
          <User className="h-3 w-3" />
          <span className="text-xs">Personal</span>
        </div>
        <Switch
          id="profile-mode"
          checked={isCreatorProfile}
          onCheckedChange={onProfileChange}
          className="mx-2 data-[state=checked]:bg-green-500"
        />
        <div className="flex items-center gap-1.5 px-2">
          <Pencil className="h-3 w-3" />
          <span className="text-xs">Creator</span>
        </div>
      </div>
    </nav>
  )
} 