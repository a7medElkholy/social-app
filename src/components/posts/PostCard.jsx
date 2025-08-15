import { Card } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router';

export default function PostCard({postData}) {
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

      
      <Link className='underline text-blue-600 text-end block p-2'> see post details </Link>
    </div>

    {/*  card body======================================= */}
    <div>
    </div>
 </Card>
}
