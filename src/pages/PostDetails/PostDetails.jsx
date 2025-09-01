import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router';
import PostCard from '../../components/posts/PostCard';
import Skeleton from 'react-loading-skeleton';

export default function PostDetails() {

    const {id} = useParams();
    const [Post , setPost] = useState();
   

      async function getPost (){
        try{
          const {data }= await axios(`https://linked-posts.routemisr.com/posts/${id}`, {
            method : "GET" ,
            headers : {token : localStorage.getItem('token'),},
          })
          console.log(data);
           setPost(data.post)
        }
    
        catch(error){
          console.log(error);
        }
      }
    
      useEffect(()=>{
        getPost()
      },[])

  return (
    <div className='max-w-[52rem] mx-auto'>
     {!Post ? <Skeleton className='h-[40rem] my-2'  baseColor='#ddd'/> : <PostCard postData={Post} />}
    </div>
  )
}
