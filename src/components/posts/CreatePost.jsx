import React, { useContext, useRef } from 'react'
import { userContext } from '../../context/UserContext'
import { TextInput } from 'flowbite-react';
import { PictureFrame } from 'iconsax-reactjs';
import { Button } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function CreatePost() {
 
    const { userData } = useContext(userContext)
    const {handleSubmit,register,watch,setValue} = useForm()
    const uploadInput = useRef()

   async function createPost(values){
        const myFormData  = new FormData()
        myFormData.append("body" , values.body)
        myFormData.append('image',uploadInput.current.files[0])


        try {
            const{data} = await axios("https://linked-posts.routemisr.com/posts",{
                method :"POST",
                data : myFormData ,
                headers : {
                    token : localStorage.getItem("token")
                }
            })
            toast.success("sucsses")
        } catch (error) {
            toast.error(error?.response?.data?.error)
        }
    }

    return (
    <form onSubmit={handleSubmit(createPost)} className='bg-white my-4 rounded-xl'>
        {/* card header =========================== */}
        <h2 className='border-b p-4'>post somthing</h2>
        
        {/* card body ============================= */}
        <div className='flex items-center gap-2 p-4'>
            <div className='rounded-2xl overflow-hidden size-10  bg-zinc-300'>
                <img src={userData?.photo} alt="user avatar" />
            </div>

            <TextInput {...register("body")} type='text' placeholder='ex: ay haga' className='grow' />
            <input {...register('image')} ref={uploadInput} type="file" className='hidden' onChange={(e=> setValue("image", e.target.files))}/>
            <PictureFrame onClick={()=>uploadInput.current.click()} size={32} className='text-gray-400' />
        </div>

        <div>
           {watch('image')?.length && (
             <img src={URL.createObjectURL(uploadInput.current.files[0])} alt="hello ahmed" />
           )}  
        </div>

        <div className="px-4 pb-4">
            <Button type='submit' color="dark" className='w-full'>Create Post</Button>
        </div>
      
    </form>
  )
}
