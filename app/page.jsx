"use client";

import { Inputcard } from "@/components/input-demo";

import { useRouter } from "next/navigation";
import { UseInputData } from "./store/inputdata";

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

export default function Home() {

  const router = useRouter()
 
  const updatalink =UseInputData((state)=>state.updatelink)
 
  const updatekey =UseInputData((state)=>state.updatekey)

  const submit = () => {  
   
//TODO:check if link and key is valid 

    router.push(`/markdown`);
  };

  
  return (
    <>
  
<div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-secondary w-8 h-8 flex items-center justify-center rounded-full">

              <Github className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold">Github Readme Generator</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" size="sm" asChild >
                <a href="https://github.com/Kaushal-0071/readmegen" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 " />
              </a>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8 flex items-center">
        <div className="max-w-md mx-auto">
        <Inputcard setlink={updatalink} setkey={updatekey}  submit={submit} />
        </div>
      </main>
     
    </div>
    </>
  
  );
}

