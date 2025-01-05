import { readFile } from 'fs/promises'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXContent } from '@/app/components/markdown/mdx-content'
import { components } from '@/app/components/markdown/mdx-components'

export default async function DocsPage() {
  try {
    const filePath = path.join(process.cwd(), 'docs/ADDING_POSTS.md')
    const content = await readFile(filePath, 'utf8')

    return (
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-sm prose-gray dark:prose-invert max-w-none">
          <MDXContent frontmatter={{}}>
            <MDXRemote 
              source={content}
              components={components}
              options={{
                parseFrontmatter: false,
                mdxOptions: {
                  format: 'md'
                }
              }}
            />
          </MDXContent>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading documentation:', error)
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Error loading documentation</h1>
        <p className="text-muted-foreground">Unable to load the documentation content.</p>
      </div>
    )
  }
} 