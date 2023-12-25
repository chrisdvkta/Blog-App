import Link from 'next/link'
import React from 'react'
import styles from "./CardList.module.css"
import Image from 'next/image'
import Pagination from "../pagination/pagination"
import Card from '../card/Card'
import dynamic from 'next/dynamic'



const getData = async (page)=>{
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,{
    cache:"no-store",
  }); 
  if (!res.ok){
    throw new Error("Failed");
  }

  return res.json();
}


const CardList = async ({page}) => {
  const {posts,count} = await getData(page);

  const POST_PER_PAGE = 2; 
  
  const prev = POST_PER_PAGE *(page-1)>0;
  const nextItem = POST_PER_PAGE *(page-1)+POST_PER_PAGE<count; //checkif more items are present

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
          {posts?.map((item)=>{
            return <Card item = {item} key ={item._id}/>
          })}
      </div>
      <Pagination page = {page}  prev = {prev} nextItem={nextItem}/>
    </div>
  )
}

export default CardList;