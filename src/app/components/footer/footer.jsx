import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={50} height={50} />
          <h1 className={styles.logoText}>HackerNews</h1>
        </div>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={18} height={18} />
          <Image src="/instagram.png" width={18} height={18} />
          <Image src="/github-logo.png" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">NEW</Link>
          <Link href="/">Library</Link>
          <Link href="/">S.Deal</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
