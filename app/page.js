"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Home() {
  const [link, setlink] = useState("");
  const router = useRouter()
  const submit = () => {  
    const encodedLink = encodeURIComponent(link);
    
    router.push(`/markdown/${encodedLink}`);
  };
  return (
    <>
    <div className="  h-screen flex  flex-col justify-center items-center ">

<input type="text" className="w-30 h-5 text-black" placeholder="github" onChange={(e) => setlink(e.target.value)}/>
<button className="border-2 border-white w-9 m-4 rounded-md "  onClick={submit}>  get</button>

    </div>
    
    </>
  
  );
}