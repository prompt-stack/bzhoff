import type { HTMLAttributes, ReactElement } from 'react'
import * as React from 'react'
import NextLink from 'next/link'
import { Callout } from '@/app/components/ui/callout'
import { CodeBlock } from '@/app/components/ui/code-block'
import { PostImage } from '@/app/components/ui/post-image'
import { Tags } from '@/app/components/ui/tags'
import { AuthorBio } from '@/app/components/ui/author-bio'
import { NewsletterSignup } from '@/app/components/newsletter-signup'
import { FeedbackButtons } from '@/app/components/ui/feedback-buttons'
import { MdxLink } from '@/app/components/ui/mdx-link'

export interface TableProps extends HTMLAttributes<HTMLTableElement> {}
export interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {}
export interface ThProps extends HTMLAttributes<HTMLTableCellElement> {}
export interface TdProps extends HTMLAttributes<HTMLTableCellElement> {}

function hasChild(children: React.ReactNode, type: string): boolean {
  return React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === type
  )
}

export const components = {
  Callout,
  CodeBlock,
  PostImage,
  Tags,
  AuthorBio,
  NewsletterSignup,
  FeedbackButtons,
  a: MdxLink,
  Link: NextLink,

  // Handle paragraph nesting
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const childArray = React.Children.toArray(children);
    
    // Check if any child is a React element that might cause nesting issues
    const containsBlockElements = childArray.some(child => {
      if (!React.isValidElement(child)) return false;
      
      // If it's a string type element (HTML element)
      if (typeof child.type === 'string') {
        const inlineElements = ['a', 'span', 'strong', 'em', 'code'];
        return !inlineElements.includes(child.type);
      }
      
      // If it's a React component, treat it as a block element
      return true;
    });

    if (containsBlockElements) {
      return <div className="mdx-block-wrapper" {...props}>{children}</div>;
    }

    return <p className="mb-4 leading-7" {...props}>{children}</p>;
  },

  // Basic HTML elements
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-disc" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-6 list-decimal" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="mt-2" {...props} />
  ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
  ),
  
  // Table components
  table: ({ className, ...props }: TableProps) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  thead: (props: TheadProps) => (
    <thead className="border-b" {...props} />
  ),
  tbody: (props: TbodyProps) => (
    <tbody className="divide-y" {...props} />
  ),
  tr: (props: TrProps) => (
    <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
  ),
  th: (props: ThProps) => (
    <th className="border px-4 py-2 text-left font-bold" {...props} />
  ),
  td: (props: TdProps) => (
    <td className="border px-4 py-2 text-left" {...props} />
  ),

  // Inline elements
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props} />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4" {...props} />
  ),
} as const
