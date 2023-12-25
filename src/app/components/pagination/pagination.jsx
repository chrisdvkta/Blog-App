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



// use client'

// import { useRouter } from 'next/navigation';
// import styles from './pagination.module.css';

// const Pagination = ({ page, hasPrev, hasNext, cat }: { page: number, hasPrev: boolean, hasNext: boolean, cat?: string }) => {

//     const router = useRouter();

//     console.log(hasPrev, hasNext);
    

//     return (
//         <div className={styles.container}>
//            <button disabled={!hasPrev} className={styles.button}  onClick={() => router.push(`?page=${+page - 1}&cat=${cat ? cat : ''}`)}>
//                 Previous
//            </button>
//            <button disabled={!hasNext} className={styles.button} onClick={() => router.push(`?page=${+page + 1}&cat=${cat ? cat : ''}`)}>
//                 Next
//            </button>
//         </div >
//     )
// };

// export default Pagination;
