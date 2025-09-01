import React, { useContext } from 'react'
import { userContext } from '../../context/UserContext'
import { Button, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'

export default function CreateComment({postId}) {
    const {userData} = useContext(userContext)
    const {handleSubmit,register} = useForm()

   async function createComment({content}){

    const commentData = { content, post : postId }
        try {
            await axios("https://linked-posts.routemisr.com/comments",{
                method :"POST",
                data : commentData ,
                headers : {
                    token : localStorage.getItem("token")
                }
            })
            toast.success("comment created sucssesfuly")
        } catch (error) {
            toast.error(error?.response?.data?.error)
        }
    }

  return (
    <form  onSubmit={handleSubmit(createComment)} className='bg-white rounded-xl'>
            {/* card body ============================= */}
            <div className='flex items-center gap-2 py-4'>
                <div className='rounded-2xl overflow-hidden size-10  bg-zinc-300'>
                    <img src={userData?.photo} alt="user avatar" />
                </div>
    
                <TextInput {...register("content")} type='text' placeholder='ex: ay haga' className='grow' />
            </div>

            <Button type='submit' color="dark" className='w-full'>Create comment</Button>
          
        </form>
  )
}
