import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/toaster'

import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "README Generator",
  description: "Generate readme for your github repository in seconds with AI",
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: dark)",
        href: "/images/favicon-light.png" ,
        url: "/images/favicon-light.png"
      },
      {
        media: "(prefers-color-scheme: light)",
        href: "/images/favicon-dark.png" ,
        url: "/images/favicon-dark.png"
      }
    ]
  }
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en" suppressHydrationWarning>
      <body className={inter.className+"overflow-y-auto no-scrollbar"} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          >
          {children}
       <Analytics/>
         <Toaster/>
        </ThemeProvider>
      </body>
    </html>)
  );
}

