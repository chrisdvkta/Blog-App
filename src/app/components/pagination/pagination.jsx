"use client"
import React from 'react'
import styles from "./pagination.module.css"
import { useRouter } from 'next/navigation'


const pagination = ({page,prev,nextItem}) => {
  
  const router = useRouter();
    
    return (
      
      <div className = {styles.container}>
        <button className={styles.button} 
        onClick={()=>router.push(`?page=${page-1}`)}
        disabled= {!prev}
        >
        Previous</button>
        <button className={styles.button} 
        onClick={()=>router.push(`?page=${page+1}`)}
        disabled={!nextItem}
        >
        Next</button>

    </div>
  )
}


export default pagination;
