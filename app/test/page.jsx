"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"



export default function ToastWithTitle() {
  const { toast } = useToast()
 const [effect, seteffect] = useState(false)
 const run=()=>{
 seteffect(true)
 
 }
  return (
    <div className="bg-black w-50 h-100 font-bo">
   <button className={`${
            effect && "motion-preset-confetti "
          } bg-blue-500 p-4 text-white w-1000 rounded hover:bg-blue-700 hover:shadow-xl`} onClick={run} onAnimationEnd={()=>seteffect(false)}>sdfsdfsdf</button>

    </div>
  )
}
