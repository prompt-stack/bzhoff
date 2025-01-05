"use client"

import Link from "next/link"
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { SectionHeader } from "@/app/components/section-header"
import { TooltipProvider } from "@/app/components/ui/tooltip"
import { Button } from "@/app/components/ui/button"
import { useState } from "react"
import type { PersonalProfile } from "./types"

type PersonalLinksProps = {
  profile: PersonalProfile
}

export function PersonalLinks({ profile }: PersonalLinksProps) {
  const initiatives = profile.links.slice(0, 2)
  const projects = profile.links.slice(2)
  const [showAllProjects, setShowAllProjects] = useState(false)
  
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)
  const remainingCount = projects.length - 3

  const ProjectLink = ({ link }: { link: typeof profile.links[0] }) => (
    <Link
      key={link.title}
      href={link.href}
      className="group"
    >
      <div className="flex items-center justify-between py-3 border-b border-border/40 hover:text-muted-foreground transition-colors">
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{link.title}</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
          {link.description && (
            <p className="text-sm text-muted-foreground line-clamp-1">{link.description}</p>
          )}
          {link.techStack && (
            <div className="flex flex-wrap gap-2">
              {link.techStack.map((tech) => (
                <span key={tech} className="text-[10px] text-muted-foreground/60">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )

  return (
    <div className="mb-8 mt-12">
      <TooltipProvider delayDuration={0}>
        <div>
          <SectionHeader 
            title="Initiatives"
            tooltip="Current projects and organizations I'm involved with"
          />
          <div className="border-t border-border/40">
            {initiatives.map((link) => (
              <ProjectLink key={link.title} link={link} />
            ))}
          </div>

          <SectionHeader 
            title="Developer Portfolio"
            tooltip="Software projects I've built and contributed to"
          />
          <div className="border-t border-border/40">
            {visibleProjects.map((link) => (
              <ProjectLink key={link.title} link={link} />
            ))}
            {remainingCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full mt-4 text-xs text-muted-foreground hover:text-foreground h-auto py-2"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                <span>
                  {showAllProjects 
                    ? 'Show less' 
                    : `View ${remainingCount} more project${remainingCount === 1 ? '' : 's'}`
                  }
                </span>
                <ChevronRight 
                  className={`h-3 w-3 ml-1 transition-transform duration-200 ${
                    showAllProjects ? 'rotate-90' : ''
                  }`}
                />
              </Button>
            )}
          </div>
        </div>
      </TooltipProvider>
    </div>
  )
} 