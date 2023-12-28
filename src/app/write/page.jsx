"use client"

import { useRouter } from "next/navigation"
import styles from "./write.module.css"
import Image from "next/image"
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"
import { useSession } from "next-auth/react"

const WritePage = () => {
    const {status} = useSession(); 
    const router  = useRouter();
    
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    if(status ==="authenticated"){
        router.push("/")
    }
    if (status==="loading"){
         <div className="{styles.loading}">Loading...</div>
    }
    if (status==="authenticated"){
        router.push("/")
    }
  return (
    <div className={styles.container}>
        <input  className={styles.input} type="text" placeholder="Title"/>
        <div className={styles.editor}>
            <button className={styles.button} onClick={()=>setOpen(!open)}>
                <Image src = "/plus.png" alt = "" width={16} height = {16}/>
            </button>
            {open && (
                <div className={styles.add}>
                    <button className={styles.addButton}>
                        <label htmlFor="image">
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </label>
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/external.png" alt="" width={16} height={16} />
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/video.png" alt="" width={16} height={16} />
                    </button>
              </div>
        
            )}
        <ReactQuill className={styles.textArea} theme="bubble" value ={value} onChange = {setValue} placeholder="Write somethin..."/>
        </div>
        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage