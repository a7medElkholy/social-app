import React, { useEffect, useState } from 'react'
import CreatePost from '../../components/posts/CreatePost'
import axios from "axios";
import PostCard from './../../components/posts/PostCard';

export default function Posts() {
  const [allPosts , setAllPosts] = useState([])
  console.log(allPosts);
  

  async function getAllPosts (){
    try{
      const {data }= await axios("https://linked-posts.routemisr.com/posts?limit=50", {
        method : "GET" ,
        headers : {token : localStorage.getItem('token'),},
      })
       setAllPosts(data.posts)
    }

    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllPosts()
  },[])

  return (
    <div className='max-w-[52rem] mx-auto'>
      <CreatePost/>
      {allPosts.map((post)=>(
        <PostCard key={post._id} postData={post} />
      ))}
    </div>
  )
}
