# Adding Posts to the Platform

## Quick Start
```bash
npm run new-post
```

The script will prompt you for:
- Post title (automatically converted to URL slug)
- Summary
- Author bio
- Tags (comma-separated)
- SEO description (150-160 characters)
- SEO keywords (comma-separated)

## What Gets Created

The script automatically creates:

1. Post Directory: `app/posts/[slug]/`
   - `content.mdx` - Your post content
   - `page.tsx` - The page component

2. Images Directory: `public/images/posts/[slug]/`
   - Add your cover image here as `cover.jpg`
   - Add any other post images here

3. Updates `app/data/posts.ts` with your new post entry

## Writing Content

### Frontmatter
The script sets up your frontmatter automatically:
```mdx
---
title: "Your Post Title"
publishedAt: "2024-01-05"
updatedAt: "2024-01-05"
author: "Hoff"
authorImage: "/images/authors/hoff-linkedin.jpg"
tags: ["AI", "Development"]
summary: "Your post summary"
image: "/images/posts/[slug]/cover.jpg"
description: "SEO description"
keywords: "your, keywords"
---
```

### Available Components

1. Callouts
```mdx
<Callout type="info">
  Important information goes here
</Callout>
```

2. Images
```mdx
<PostImage 
  src="/images/posts/[slug]/your-image.jpg"
  alt="Descriptive alt text"
  caption="Optional image caption"
/>
```

3. Code Blocks
```mdx
<CodeBlock language="typescript">
{\`const example = "your code here";\`}
</CodeBlock>
```

4. Newsletter & Feedback (automatically added)
```mdx
<div className="border-t border-border/40 mt-8 pt-6">
  <div className="space-y-6">
    <FeedbackButtons />
    <NewsletterSignup />
  </div>
</div>
```

## SEO Best Practices

1. Title & Description
   - Use descriptive, keyword-rich titles
   - Keep descriptions between 150-160 characters
   - Include primary keyword naturally

2. Images
   - Always include descriptive alt text
   - Optimize images before uploading
   - Use meaningful filenames

3. Content Structure
   - Use proper heading hierarchy (H1, H2, H3)
   - Include target keyword in first paragraph
   - Write engaging, scannable content
   - Aim for 1000+ words for in-depth topics

4. URLs
   - Auto-generated from title
   - Clean, hyphen-separated words
   - Include main keyword if possible

## Testing Your Post

1. Add required images:
   ```bash
   public/images/posts/[slug]/cover.jpg
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit your post:
   ```
   http://localhost:3000/posts/[slug]
   ```

4. Check:
   - Content rendering
   - Images loading
   - Code syntax highlighting
   - Interactive components
   - Mobile responsiveness
   - Meta tags and SEO elements

## Publishing Checklist

✅ Cover image added and optimized
✅ Content written and formatted
✅ All images have alt text
✅ Code examples tested
✅ SEO elements verified
✅ Mobile layout checked
✅ Links tested
✅ Feedback components working 