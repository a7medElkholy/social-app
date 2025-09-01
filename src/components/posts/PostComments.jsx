import React from 'react'

export default function PostComments(comment) {
    

    console.log(comment.comment.commentCreator);
    
    
    
  return (
    <div className='rounded-2xl p-4 my-4 bg-zinc-100'>
        <div>
            <div className='flex items-center gap-4'>
            <div className='rounded-2xl overflow-hidden size-10  bg-zinc-300'>
                <img src={!comment?.comment?.commentCreator?.photo.includes("undefined")?comment?.commentCreator?.photo :
                    "https://linked-posts.routemisr.com/uploads/default-profile.png"
                } alt="user avatar" />
            </div>

            <div className='text-black'>
                <h4 className='font-bold'>{comment?.comment?.commentCreator?.name}</h4>
                <p>{comment?.comment?.createdAt}</p>
            </div>
            </div>
            <p className='my-1 text-gray-500'>{comment?.comment?.content}</p>
        </div>
    </div>
  )
}
