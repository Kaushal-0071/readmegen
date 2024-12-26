"use client";

import MDEditor from '@uiw/react-md-editor';



import React, {  useEffect, useState } from 'react'
import { UseInputData } from '../store/inputdata';
import { useTheme } from 'next-themes';
import Header from '@/components/header';
import Loading from '@/components/loading';
import { useRouter } from 'next/navigation';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const Markdown = () => {
    const { theme } = useTheme()
   
    const [mdx, setmdx] = useState("")
  
    const [error, seterror] = useState(false)
    const router = useRouter()
    
    const key =UseInputData((state)=>state.key)
    const link =UseInputData((state)=>state.link)
   console.log("in markdown data",key,link);
    console.log(theme)
    const modified_link = link.replace("g","u");




    const {
      GoogleGenerativeAI,
      HarmCategory,
      HarmBlockThreshold,
    } = require("@google/generative-ai");
    
    const apiKey = key 
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: "Analyze the provided GitHub repository and generate a stylish and professional README in Markdown format. The README should include a project title and a concise description, an introduction to the main features of the project, and a clickable table of contents for navigation. Provide detailed instructions on how to install and set up the project, specifying where environment variables should be placed and their required formats if any environment variables are used. Include a clear explanation of how to run the project, along with examples of commands or configurations.\n\nList the major dependencies and tools required for the project . Add a section for contributing, explaining how developers can participate. Include a placeholder or inferred license information if applicable, and a contact section with placeholder details for reaching out to maintainers or contributors.\n\nEnsure the README is visually appealing and formatted in Markdown using headings, subheadings, bullet points, and code blocks as needed. It should be optimized for readability and provide accurate, non-fabricated information based solely on the project's structure and content. Provide the output strictly in Markdown format without any additional commentary or explanations.Add badges to the readme .Get badges from valid sources.Badges should be after the title. Give examples to run the code also if possible.If any previous readme or documentation is present enhance it and add the new information to it.The output should be a valid and well-formed markdown ",
    });
    
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    
    async function run(data) {
      try{
        const chatSession = model.startChat({
          generationConfig,
          history: [
          ],
        });
      
        const result = await chatSession.sendMessage(data);
        return result;
      }
      catch(error){
        seterror(true)
        console.log("error in run")
      }
      
    }

useEffect( ()=>{
  document.documentElement.setAttribute('data-color-mode', theme);
},[theme])
// useeffect to insert in the markdown
useEffect( ()=>{
  document.documentElement.setAttribute('data-color-mode', theme);
  const insert_in_mdx= async ()  => {
      
    const options = {
      method: 'GET',
      headers: {
        accept: '',
        Accept: 'application/json, text/yaml, text/markdown, text/html, text/plain'
      }
    };
    
    try {
      const response = await fetch(modified_link, options);
      const data = await response.text();
      const repo= await run(data);
      setmdx(repo.response.text().replace("```markdown",""));
      
     
    } catch (error) {
      
      seterror(true)
      //TODO: handle error
    }
        }
        insert_in_mdx();

}, [])

    //use effect ends
const handleClose = () => {
  seterror(false);
  router.back()
}
  
    return (
      <>
     
        <div>
        <div>

<AlertDialog open={error} onOpenChange={seterror}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Error Occurred</AlertDialogTitle>
      <AlertDialogDescription>
       An error occurred while processing your request.Try changing the api key. 
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <Button onClick={handleClose}>Retry</Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
</div>
          
      { 
       mdx ?<>
   
   
        <Header text={mdx}/>
       <MDEditor
          value={mdx}
          onChange={setmdx}
          height={1200}
         />
       </> :<Loading/>
        
        }
        
      </div>
      </>
    )
}

export default Markdown