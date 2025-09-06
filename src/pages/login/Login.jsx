import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";


export default function Login() {
  const {register,handleSubmit} =useForm()
  const router = useNavigate()
  const {getUserData} = useContext(userContext)
  
 async function CreateUser(values){
  
    try {
    const {data }= await axios("https://linked-posts.routemisr.com/users/signin",{
        method: "POST" ,
        data : values
      })
      
      localStorage.setItem("token",data?.token);
      getUserData(data?.token);
       router("/");

    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <form onSubmit={handleSubmit(CreateUser)} className="flex mx-auto mt-32 max-w-md flex-col gap-4">
     
      {/* email===================================================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput id="email1" className="rounded-2xl" type="email" placeholder="name@flowbite.com" {...register("email")}  />
      </div>

      {/* password================================================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Your password</Label>
        </div>
        <TextInput id="password" className="rounded-2xl" type="password" placeholder="**********" {...register("password")}  />
      </div>

      <p>do not have an account? <a href="/Register">register</a></p>

      <Button type="submit">Submit</Button>
    </form>
  );
}
