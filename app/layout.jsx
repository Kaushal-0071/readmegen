import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GitHub Repo Analyzer",
  description: "Analyze GitHub repositories using Gemini API",
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
       
         <Toaster/>
        </ThemeProvider>
      </body>
    </html>)
  );
}

