import { Inter } from 'next/font/google'
import { ThemeProvider } from "./theme-provider"
import { TooltipProvider } from "@/app/components/ui/tooltip"
import { MDXProviderClient } from '@/app/components/markdown/mdx-provider'
import "./globals.css"
import './mdx.css'
import 'katex/dist/katex.min.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <MDXProviderClient>
              {children}
            </MDXProviderClient>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

