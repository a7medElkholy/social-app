import { Card } from 'flowbite-react';
import React from 'react'
import { Link, useParams } from 'react-router';
import PostComments from './PostComments';
import { MessageText1 } from 'iconsax-reactjs';
import CreateComment from './CreateComment';

export default function PostCard({postData}) {
  const{id}=useParams()
  return <Card className='bg-white my-4 rounded-xl'>
    {/*  card header======================================= */}
    <div className='flex items-center gap-4'>
            <div className='rounded-2xl overflow-hidden size-10  bg-zinc-300'>
                <img src={postData?.user.photo} alt="user avatar" />
            </div>

            <div>
                <h4 className='font-bold'>{postData?.user.name}</h4>
                <p>{postData?.createdAt}</p>
            </div>
    </div>

    {/*  card body======================================= */}
    <div>
      <p className='mb-4'>{postData?.body}</p>
      <img className='rounded-xl' src={postData.image} alt="" />

      
      {!id&&
      <Link  to={"/posts/" + postData._id} className='underline text-blue-600 text-end block p-2'> see post details </Link>}
    </div>

    {/*  card body======================================= */}
    <div>
      <div className='flex items-center gap-4'>
        <MessageText1 size="30" color="#999"/>
        {postData.comments.length} comment

      </div>
      {id ? (postData.comments.map((c)=><PostComments key={c._id} comment={c}/>)) :
      (<PostComments comment={postData?.comments[0]}/>)}
      <CreateComment postId = {postData?._id}/>
    </div>
 </Card>
}
