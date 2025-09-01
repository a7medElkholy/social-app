import React, { useEffect, useState } from 'react'
import CreatePost from '../../components/posts/CreatePost'
import axios from "axios";
import PostCard from './../../components/posts/PostCard';
import Skeleton from 'react-loading-skeleton';

export default function Posts() {
  const [allPosts , setAllPosts] = useState([])
  const  [isLoading,setIsLoading] = useState(true)
  async function getAllPosts (){
    try{
      const {data }= await axios("https://linked-posts.routemisr.com/posts?limit=5&sort=createdAt", {
        method : "GET" ,
        headers : {token : localStorage.getItem('token'),},
      })
       setAllPosts(data.posts)
       setIsLoading(false)
    }

    catch(error){
      console.log(error);
      setIsLoading(true)
    }
  }

  useEffect(()=>{
    getAllPosts()
  },[])

  return (
    <div className='max-w-[52rem] mx-auto'>
      <CreatePost/>
     {isLoading? <Skeleton className='h-96 my-2' count={5} baseColor='#ddd' /> : ( allPosts.map((post)=>(<PostCard key={post._id} postData={post} />)))}
    </div>
  )
}
