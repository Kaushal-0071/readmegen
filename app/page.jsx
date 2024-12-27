"use client";

import { Inputcard } from "@/components/input-demo";

import { useRouter } from "next/navigation";
import { UseInputData } from "./store/inputdata";


import { Button } from "@/components/ui/button"
import { Github, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { useToast } from "@/hooks/use-toast";
import { HeroHighlight } from "@/components/ui/herohighlight";
export default function Home() {

  const router = useRouter()
  const { toast } = useToast()
  const updatalink =UseInputData((state)=>state.updatelink)
 
  const updatekey =UseInputData((state)=>state.updatekey)
  const link =UseInputData((state)=>state.link)
  const regex = /^https:\/\/github\.com\/[^\/]+\/[^\/]+$/;
  const submit = () => {  
   
//TODO:check if link and key is valid 

if(!regex.test(link)){

  toast({
    variant: "destructive",
    title: "Please enter the correct Repository link",
    
   
  })
return
}
    router.push(`/markdown`);
  };
  const { setTheme, theme } = useTheme();
  
  return (
    <>
    <div className=" overflow-y-scroll no-scrollbar">
    <div className="absolute pointer-events-none h-[750px] inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-20"></div>

<HeroHighlight containerClassName={"h-full "} >
<div className="min-h-screen bg-none w-full">
  <header className="border-b w-screen backdrop-blur-[0.5px]">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Github className="h-6 w-6" />
        <span className="font-bold text-xl">README Generator</span>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://github.com/Kaushal-0071/readmegen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Github className="h-4 w-4" />
            <span>View on GitHub</span>
          </a>
        </Button>
      </div>
    </div>
  </header>

  <main className="container mx-auto px-4 py-16 ">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        Create Beautiful GitHub READMEs
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Generate professional README files for your projects in minutes. No more starting from scratch.
      </p>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="font-semibold">
            Get Started
          </Button>
        </DialogTrigger>
        
        <DialogContent>
            
          <DialogTitle>
       
          </DialogTitle>
         
        <Inputcard setlink={updatalink} setkey={updatekey}  submit={submit} />
        </DialogContent>
        

        
      </Dialog>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4">
            📝
          </div>
          <h3 className="font-semibold mb-2">Easy to Use</h3>
          <p className="text-muted-foreground">
            Simple interface to generate professional READMEs in minutes
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4">
            🎨
          </div>
          <h3 className="font-semibold mb-2">Customizable</h3>
          <p className="text-muted-foreground">
            Choose from various templates and customize to your needs
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4">
            🚀
          </div>
          <h3 className="font-semibold mb-2">Professional</h3>
          <p className="text-muted-foreground">
            Create READMEs that stand out and look professional
          </p>
        </div>
      </div>
    </div>
  </main>
</div>
</HeroHighlight>

    </div>
       
    </>
  
  );
}

