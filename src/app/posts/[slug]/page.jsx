import React from "react";
import styles from "./SinglePage.module.css";
import Menu from "@/app/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/app/components/comments/Comments";
import DOMPurify from "isomorphic-dompurify";
import HTMLReactParser from "html-react-parser";


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  console.log(data.img);
  // const safeHTMLdescription = DOMPurify.sanitize(data?.desc); //to use dangerous inner html and preventing XSS attacks

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  alt={data.title}
                  src={data.user.image}
                  width={100}
                  height={100}
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}> - 12.07.2023</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>{HTMLReactParser(data.desc)}</div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
