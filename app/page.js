"use client";

import { Inputcard } from "@/components/input-demo";

import { useRouter } from "next/navigation";
import { UseInputData } from "./store/inputdata";

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
  <div className="flex justify-center items-center h-screen">

    <Inputcard setlink={updatalink} setkey={updatekey}  submit={submit}/>
  </div>

    </>
  
  );
}

