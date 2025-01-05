"use client"

import { useState } from "react"
import { ThemeToggle } from "@/app/theme-toggle"
import { NewsletterSignup } from "@/app/components/newsletter-signup"
import { ProfileSwitcher } from "@/app/components/profile-switcher"
import { ProfileHeader } from "@/app/components/profile/profile-header"
import { CreatorContent } from "@/app/components/profile/creator-content"
import { CreatorConnect } from "@/app/components/profile/creator-connect"
import { PersonalLinks } from "@/app/components/profile/personal-links"
import { PostsSection } from "@/app/components/posts-section"
import { Footer } from "@/app/components/layout/footer"
import { profiles } from "@/app/data/profiles"
import { posts } from "@/app/data/posts"

export default function HomePage() {
  const [isCreatorProfile, setIsCreatorProfile] = useState(false)
  const currentProfile = isCreatorProfile ? profiles.creator : profiles.personal

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <ProfileSwitcher 
          isCreatorProfile={isCreatorProfile}
          onProfileChange={setIsCreatorProfile}
        />

        <ProfileHeader 
          profile={currentProfile}
          isCreatorProfile={isCreatorProfile}
        />

        {isCreatorProfile ? (
          <>
            <CreatorContent profile={profiles.creator} />
            <CreatorConnect profile={profiles.creator} />
            <NewsletterSignup />
          </>
        ) : (
          <PersonalLinks profile={profiles.personal} />
        )}

        <PostsSection posts={posts} />

        <Footer />
      </main>
    </div>
  )
}

