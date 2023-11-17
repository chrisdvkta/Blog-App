import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image';

const Comments = () => {
    const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status==="authenticated"? (
            <div className={styles.write}>
                <textarea placeholder='write a comment...' className={styles.input}/>
                <button className={styles.button}>Send</button>
            </div>
        ):(
        <Link href = "/login"> Login to write comments</Link>

        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src = "/p1.jpeg" width={50} height = {50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span>Chris Rock</span>
                        <span>1.02.2023</span>
                    </div>
                </div>
             <p className={styles.desc}>LOREM fadhfk ldf adslfsd fasfaf</p>   
            </div>
        </div>
    </div>
  );
}

export default Comments