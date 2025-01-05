import { Inter } from 'next/font/google'
import { ThemeProvider } from "./theme-provider"
import { TooltipProvider } from "@/app/components/ui/tooltip"
import { MDXProviderClient } from '@/app/components/markdown/mdx-provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import "./globals.css"
import './mdx.css'
import 'katex/dist/katex.min.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600']
})

export const metadata = {
  metadataBase: new URL('https://bzhoff.vercel.app'),
  title: {
    default: 'Brandon Z. Hoff | AI Innovation & Full-Stack Development',
    template: '%s | Brandon Z. Hoff'
  },
  description: 'Exploring AI innovation, full-stack development, and the future of technology. Join me in building the next generation of digital solutions.',
  keywords: ['AI', 'Full-Stack Development', 'Technology', 'Innovation', 'Software Development', 'Digital Transformation'],
  authors: [{ name: 'Brandon Z. Hoff' }],
  creator: 'Brandon Z. Hoff',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bzhoff.vercel.app',
    title: 'Brandon Z. Hoff | AI Innovation & Full-Stack Development',
    description: 'Exploring AI innovation, full-stack development, and the future of technology.',
    siteName: 'Brandon Z. Hoff',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Brandon Z. Hoff'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Z. Hoff | AI Innovation & Full-Stack Development',
    description: 'Exploring AI innovation, full-stack development, and the future of technology.',
    creator: '@hoffdigital',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
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
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

