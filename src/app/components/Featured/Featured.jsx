import Link from 'next/link'
import styles from "./Featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Welcome to hacker News</b>
      </h1>
      <div className = {styles.post}>
        <div className={styles.imgContainer}>
          <Image src ="/p1.jpeg" fill></Image>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Lorem Ipsum dolor</h2>
          <p className = {styles.postDec}>We give startups a disproportionate advantage.</p>
          <button className = {styles.button}>Read More</button>
        </div>
      </div>



    </div>
  )
}

export default Featured;