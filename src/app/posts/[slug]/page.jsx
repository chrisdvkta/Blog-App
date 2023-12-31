import React from 'react'
import styles from "./SinglePage.module.css"
import Menu from '@/app/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/app/components/comments/Comments'
import DOMPurify from 'isomorphic-dompurify'

const getData = async (slug)=>{
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`,{
    cache:"no-store",
  }); 
  if (!res.ok){
    throw new Error("Failed");
  }

  return res.json();
}



const SinglePage = async ({params}) => {

  const {slug} =params;

  const data = await getData(slug);


  const safeHTMLdescription = DOMPurify.sanitize(data?.desc); //to use dangerous inner html and preventing XSS attacks

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
          {data?.user?.image&&(
            <div className={styles.userImageContainer}>
              <Image alt ="" src= {data.user.image} fill className = {styles.avatar}/>
            </div> 
          )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}> - 12.07.2023</span>
            </div>
          </div>
        </div>
        {data?.img &&(
          <div className={styles.imageContainer}>
            <Image src= "/p1.jpeg" fill className = {styles.image}/>
          </div>
        )}

      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            {safeHTMLdescription}
          </div>
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage