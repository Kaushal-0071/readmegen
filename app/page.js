"use client";
import { useRouter } from "next/navigation";

import {  useState } from "react";
import EntryContext from "./context";

export default function Home() {
  const [link, setlink] = useState("");
  const router = useRouter()
  
  const submit = () => {  
   
    
    router.push(`/markdown`);
  };
  return (
    <>
    <EntryContext.Provider value={link}>
      

    <div className="  h-screen flex  flex-col justify-center items-center ">

<input type="text" className="w-30 h-5 text-black" placeholder="github" onChange={(e) => setlink(e.target.value)}/>
<button className="border-2 border-white w-9 m-4 rounded-md "  onClick={submit}>  get</button>

    </div>
    
    </EntryContext.Provider>
    </>
  
  );
}