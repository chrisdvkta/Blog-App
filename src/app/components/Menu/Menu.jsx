import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2>{"What's Hot"}</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.deal}`}>S.Deal</span>
            <h3 className={styles.title}>Lorem Ipsum Dolor sit amet elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Chris Rock</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.new}`}>NEW</span>
            <h3 className={styles.title}>Lorem Ipsum Dolor sit amet elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Chris Rock</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
