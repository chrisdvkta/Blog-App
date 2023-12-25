import Image from 'next/image'
import styles from "./Card.module.css"
import Link from 'next/link'
const Card = ({key,item}) => {
  return (
    <div className={styles.container} key = {key}>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.07.2023 - </span>
                    <span className={styles.category}>NEW</span>
                </div>
                <Link href = "/">
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <Link href ="/" className={styles.link}>Read More</Link>
            </div>
    </div>
  )
}

export default Card