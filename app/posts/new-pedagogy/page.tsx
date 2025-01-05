import { readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXLayout } from '@/app/components/markdown/mdx-layout'
import { MDXContent } from '@/app/components/markdown/mdx-content'
import { components } from '@/app/components/markdown/mdx-components'

interface Frontmatter {
  title: string
  publishedAt: string
  updatedAt: string
  readingTime: string
  author: string
  authorBio: string
  authorImage: string
  tags: string[]
  summary: string
  image: string
}

export default async function PostPage() {
  try {
    const filePath = path.join(process.cwd(), 'app/posts/new-pedagogy/content.mdx')
    const fileContent = await readFile(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    const metadata = data as Frontmatter

    return (
      <div suppressHydrationWarning>
        <MDXLayout metadata={metadata}>
          <MDXContent frontmatter={metadata}>
            <MDXRemote 
              source={content}
              components={components}
              options={{
                scope: { frontmatter: metadata },
                parseFrontmatter: false
              }}
            />
          </MDXContent>
        </MDXLayout>
      </div>
    )
  } catch (error) {
    console.error('Error loading MDX:', error)
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Error loading content</h1>
        <p className="text-muted-foreground">Unable to load the requested content.</p>
      </div>
    )
  }
}

