import Link from "next/link";
import styles from "./Featured.module.css";
import Image from "next/image";
import prisma from "@/utils/connect";



const getData = async ()=>{
  const res = prisma.post.findUnique(
    {where:{
      id: `clvaajdav0005oicxdofutc6j`
    }}
  )

  return res; 
}

const Featured = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Welcome to hacker News</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={data.img} fill objectFit="cover"></Image>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>{data.title}</h2>
          <Link href={`/posts/${data.slug}`}  className={styles.link}>
          <button className={styles.button} >Read More</button>
          
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
