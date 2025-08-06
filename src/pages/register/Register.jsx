
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import ErrorMessage from './../../components/shared/ErrorMessage';


export default function Register() {


  const schema = z.object({
  name: z.string("name must be valid").min(3,"name must be more than three"),
  email: z.email(),
  password: z.string().min(8).regex(/^[A-Z][\w]/),
  rePassword: z.string().min(8).regex(/^[A-Z][\w]/).refine((value) => value=== getValues("password"),{error: "must be same the password"}),
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}/)

  })

  const {register,handleSubmit , getValues ,formState:{errors}} =useForm( {resolver : zodResolver(schema)} )
  const router = useNavigate()
 async function CreateUser(data){
  
    try {
     await axios("https://linked-posts.routemisr.com/users/signup",{
        method: "POST" ,
        data
      })

       router("/Login");

    } catch (error) {
      console.log(error);
      
    }
    
  }

  console.log(errors)
  return (
    <form onSubmit={handleSubmit(CreateUser)} className="flex mx-auto mt-32 max-w-md flex-col gap-4">
     
      {/* name====================================================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your name</Label>
        </div>
        <TextInput id="name" className="rounded-2xl" type="text" placeholder="name" {...register("name")}  />
      
        <ErrorMessage error = {errors?.name?.message} />

      </div>
     
      {/* email===================================================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput id="email1" className="rounded-2xl" type="email" placeholder="name@flowbite.com" {...register("email")}  />
        <ErrorMessage error = {errors?.email?.message} />
      </div>

      {/* password================================================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Your password</Label>
        </div>
        <TextInput id="password" className="rounded-2xl" type="password" placeholder="**********" {...register("password")}  />
        <ErrorMessage error = {errors?.password?.message} />
      </div>

       {/* rePassword=============================================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="rePassword"> confirm Your password</Label>
        </div>
        <TextInput id="rePassword" className="rounded-2xl" type="password" placeholder="**********" {...register("rePassword")}  />
        <ErrorMessage error = {errors?.rePassword?.message} />
      </div>

       {/* gender=================================================== */}
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="gender">Select your gender</Label>
      </div>
      <Select id="gender" {...register("gender")} >
        <option value={"male"} >male</option>
        <option value={"female"} >female</option>
      </Select>
      <ErrorMessage error = {errors?.gender?.message} />
      </div>


       {/* dateOfBirth============================================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="dateOfBirth">Your dateOfBirth</Label>
        </div>
        <TextInput id="dateOfBirth" className="rounded-2xl" type="date"  {...register("dateOfBirth")} />
        <ErrorMessage error = {errors?.dateOfBirth?.message} />
      </div>

      <p>do not have an account? <a href="/Login">login</a></p>

      <Button type="submit">Submit</Button>
    </form>
  );
}
