import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList =  () => {
  // const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link
            href="/blog?cat=new"
            className={`${styles.category} ${styles.new}`}
          >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
              New
          </Link>
          <Link
            href="/blog?cat=library"
            className={`${styles.category} ${styles.library}`}
          >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
              Library
          </Link>
          <Link
            href="/blog?cat=deal"
            className={`${styles.category} ${styles.deal}`}
          >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
              S.Deal
          </Link>
      </div>
    </div>
  );
};

export default CategoryList;