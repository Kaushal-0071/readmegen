"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link";

export function Inputcard(props) {

  return (
    

    <Card className="w-full  mx-auto border-none">
      <CardHeader>
        <CardTitle>Readme Generator</CardTitle>
        <CardDescription>Enter your GitHub repo link and Gemini API key </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="repo-link"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            GitHub Repo Link
          </label>
          <Input id="repo-link" type="url" placeholder="https://github.com/username/repo" className="pb-1" onChange={(e) => {props.setlink(e.target.value) }} />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="api-key"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Gemini API Key
          </label>
          <Input id="api-key" type="password" placeholder="Enter your Gemini API key" onChange={(e) => {props.setkey(e.target.value)}} />
        <a className="text-[12px]  underline hover:text-blue-500 ml-2 cursor-pointer " href="https://aistudio.google.com/app/apikey" target="_blank">Get key</a> 
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={props.submit}>generate readme</Button>
      </CardFooter>
    </Card>
  
  );
}

