import NextLink from 'next/link'
import { HTMLAttributes } from 'react'

interface MdxLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string
}

export function MdxLink({ href = '#', className, children, ...props }: MdxLinkProps) {
  const isExternal = href.startsWith('http')
  
  if (isExternal) {
    return (
      <a 
        href={href}
        className="text-foreground hover:text-muted-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink 
      href={href}
      className="text-foreground hover:text-muted-foreground transition-colors"
      {...props}
    >
      {children}
    </NextLink>
  )
} 