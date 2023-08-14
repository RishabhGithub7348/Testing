"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
        number: "", 
      });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (
            user.username.length > 0 &&
          user.email.length > 0 &&
          user.password.length > 0 &&
          user.number.length > 0 // Check for mobile number
        ) {
          setButtonDisabled(false);
        } else {
          setButtonDisabled(true);
        }
      }, [user]);


    return (
    <div className="flex flex-col  items-center justify-center p-2 bg-[#FAFBFF]  h-screen">
      <div className="w-[460px]  border rounded-md border-gray-400 shadow-lg bg-white shadow-slate-300 outline-none  p-3">
        <div className="flex items-center justify-center p-3">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        
        </div>
        <div className="flex flex-col ">
        <div className="flex items-center justify-between p-3 ">
           <p className="text-xl font-semibold">Create Account</p>
           <Link href="/login">
               <p className="text-blue-500 underline">Login</p>
           </Link>
        </div>
        <div className="mt-3 flex flex-col gap-1">
        <div>
          <p className='text-base font-semibold text-slate-600'>Name</p>
        </div>
        <div className='flex items-center'>
          <input className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-white p-2'
          name="username"
          type="text" placeholder='Enter your Name' 
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        </div>
        <div className="mt-3 flex flex-col gap-1">
        <div>
          <p className='text-base font-semibold text-slate-600'>Email</p>
        </div>
        <div className='flex items-center'>
          <input className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-white p-2'
          name="email"
          type="email" placeholder='Enter your Email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        </div>
        <div className="mt-3 flex flex-col gap-1">
        <div>
          <p className='text-base font-semibold text-slate-600'>Password</p>
        </div>
        <div className='flex items-center'>
          <input className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-white p-2'
          name="password"
          type="password" placeholder='Enter your Name'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        </div>
        <div className="mt-3 flex flex-col gap-1">
        <div>
          <p className='text-base font-semibold text-slate-600'>Mobile Number</p>
        </div>
        <div className='flex items-center'>
          <input className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-white p-2'
          name="number"
          type="text" placeholder='Enter your Mobile Number'
          value={user.number}
                onChange={(e) => setUser({ ...user, number: e.target.value })}
          />
        </div>
        </div>
        <div className="flex items-center justify-center mt-3">
            <button
              className="bg-blue-500 text-white p-3 w-64 rounded-lg mt-3"
              onClick={onSignup}
              disabled={buttonDisabled || loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>

        </div>
        </div>
      </div>
        
    )

}