"use client"

import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const fetcher = async (url) =>{
    const res= await fetch(url);
    const data = await res.json();

    if(!res.ok){
        throw new Error(data.message);
    }
    return data; 
}

const Comments = ({postSlug}) => {
    
    const {status} = useSession(); 

    const {data,mutate,isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`
    , fetcher)
    console.log(data);

    const [desc,setDesc]  = useState("");
    const handleSubmit = async ()=>{
        await fetch ("/api/comments",{
            method : "POST",
            body:JSON.stringify({desc,postSlug})
        })
       mutate(); 
    }

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status==="authenticated"? (
            <div className={styles.write}>
                <textarea placeholder='write a comment...' className={styles.input} onChange = {e=>setDesc(e.target.value)}/>
                <button className={styles.button} onClick = {handleSubmit}>Send</button>
            </div>
        ):(
        <Link href = "/login"> Login to write</Link>

        )}
        <div className={styles.comments}>
        {isLoading ? "Loading":
        data?.map((item)=>(
            <div className={styles.comment} key ={item._id}>
                <div className={styles.user}>
                {item?.user?.image &&
                    <Image src ={item.user.image} width={50} height = {50} className={styles.image}/>
                }
                    <div className={styles.userInfo}>
                        <span>{item.user.name}</span>
                        <span>{item.createdAt}</span>
                    </div>
                </div>
             <p className={styles.desc}>{item.desc}</p>   
            </div>
        ))}
        </div>
    </div>
  );
}

export default Comments