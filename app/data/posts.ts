export type Post = {
  title: string
  date: string
  href: string
  category: string
  slug?: string
  content?: string
}

export const posts: Post[] = [
  {
    title: "The Rise of Full-Stack Creators",
    date: "Jan 4, 2025",
    href: "/posts/the-rise-of-full-stack-creators",
    category: "Tech",
    slug: "the-rise-of-full-stack-creators"
  },
  {
    title: "Evolution of Work: New Jobs in an AI Future",
    date: "Jan 2, 2025",
    href: "/posts/evolution-of-work",
    category: "AI",
    slug: "evolution-of-work"
  },
  {
    title: "A List of Websites to Delete Your B2B Data From",
    date: "Jan 2, 2025",
    href: "/posts/b2b-data-deletion",
    category: "Privacy",
    slug: "b2b-data-deletion"
  },
  {
    title: "Guide: Writing Long-Form Content with Voice and AI",
    date: "Dec 30, 2024",
    href: "/posts/ai-content-guide",
    category: "AI",
    slug: "ai-content-guide"
  },
]

export function getAllCategories(): string[] {
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories)
} 