'use client'

import { MDXProvider } from '@mdx-js/react'
import { components } from './mdx-components'

export function MDXProviderClient({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div suppressHydrationWarning>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </div>
  )
} 