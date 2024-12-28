'use client'

import { Button } from "@/components/ui/button"
import { Download, Copy, Github, Moon, Sun,Star } from 'lucide-react'
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"



export default function Header(props) {
  const repoUrl = "https://github.com/Kaushal-0071/readmegen" 
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()
  useEffect(() => setMounted(true), [])

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text)
      .then(() =>toast({
        description: "Text has been copied to clipboard. 🎊🎊",
      }))
      .catch((err) => console.error("Failed to copy: ", err))
      
  }
  const handleDownload = (e) => {
    e.preventDefault(); // Prevent default behavior, if needed
    const blob = new Blob([props.text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "readme.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <header className="bg-background w-full  border-b dark:bg-[#0d1117] transition-colors  duration-200">
      <div className=" w-screen py-2 flex items-center justify-between px-4 ">
      <div className="flex items-center space-x-3">
      <Image src="./dark_logo.svg" width={24} height={24}  alt="Logo" className="dark:invert" />
            <span className="font-bold text-xl">README Generator</span>
          </div>
        <div className="flex items-center space-x-1 ">
          <Button variant="ghost" size="icon" onClick={handleCopy} title="Copy text">
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" asChild title="Download file" onClick={handleDownload}>
            <Link href="/path-to-your-file.zip" download>
              <Download className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild title="leave a star on github">
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Star className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

