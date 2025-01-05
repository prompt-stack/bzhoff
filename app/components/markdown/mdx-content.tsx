'use client'

import { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { components } from './mdx-components'

interface MDXContentProps {
  children: React.ReactNode
  frontmatter: any
}

export function MDXContent({ children, frontmatter }: MDXContentProps) {
  const context = useMemo(() => ({ frontmatter }), [frontmatter])

  return (
    <MDXProvider components={components} >
      <div className="mdx-content">
        {children}
      </div>
    </MDXProvider>
  )
} 