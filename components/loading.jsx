'use client'


import { Inter } from 'next/font/google'

import { HeroHighlight } from './ui/herohighlight'
import { useTheme } from 'next-themes'
import { Mosaic } from 'react-loading-indicators'

const inter = Inter({ subsets: ['latin'] })

export default function Loading() {

const { theme } = useTheme()
  

  return (
    <div>
<div className="absolute pointer-events-none h-[750px] inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-20"></div>
    <HeroHighlight containerClassName={"h-full "}>
 <div className={`flex flex-col items-center justify-center min-h-screen  bg-transparent `}>
 <Mosaic color={ theme === 'dark' ? "#f5f5f5" : "#000"} size="medium" text="" textColor="" />
     
     
    
    </div>
    </HeroHighlight>
    </div>
   
  )
}


