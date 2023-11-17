import React from 'react'
import styles from "./SinglePage.module.css"
import Menu from '../components/Menu/Menu'
import Image from 'next/image'
import Comments from '../components/comments/comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem Ipsum dolor</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src= "/p1.jpeg" fill className = {styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Chris Rock</span>
              <span className={styles.date}> - 12.07.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src= "/p1.jpeg" fill className = {styles.image}/>
        </div>

      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p >Lorem ipsum, asdfad sfdsfdsafdfadsfasdfadfdafsdfasdfadsfasdfafasdfdasfasfsdf
            </p>
            <h5>Testing</h5>
            <p>Lorem ipsum, asdfad sfdsfdsafdfadsfasdfadfdafsdfasdfadsfasdfafasdfdasfasfsdf
            </p>
            <p>Lorem ipsum, asdfad sfdsfdsafdfadsfasdfadfdafsdfasdfadsfasdfafasdfdasfasfsdf
            </p>

          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage