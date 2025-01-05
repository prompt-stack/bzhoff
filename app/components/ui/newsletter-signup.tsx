'use client'

import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
  }

  return (
    <div className="mt-8 p-6 bg-primary/5 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="mb-4">Get the latest insights on AI and the future of work.</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded border bg-background"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
} 