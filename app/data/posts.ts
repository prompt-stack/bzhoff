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

]

export function getAllCategories(): string[] {
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories)
} 