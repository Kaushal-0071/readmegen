"use client"
"use client";

import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import { useState } from "react";


export default function ToastWithTitle() {

  const [mdx, setmdx] = useState('');
 
  return (
    <div className="p-3 ">


      <MDEditor
            value={mdx}
            onChange={setmdx}
            height={1200}
            
           />
    </div>
  )
}
