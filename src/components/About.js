"use client"
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { PostContext } from "@/context/PostContext";

const About = () => {
  const {user, image} = useContext(PostContext)
    return (
      
        <>
        <div className='flex items-center gap-5 overflow-hidden  md:gap-36 lg:gap-36 w-[1024px] mx-auto     p-4'>
          <div className='flex item-center border rounded-full p-2 bg-[#FFA78D] '>
            <Image src=
            {image? image : "/images/profile.png"}
            alt="logo" width={100} height={100} />
          </div>
          <div className='flex flex-col'>
            <p className='md:text-xl lg:text-xl text-base font-semibold'>{user?.username}</p>
            <p  className='md:text-base lg:text-base text-xm text-xs hidden lg:block md:block font-normal text-slate-600'>{user?.email}</p>
            <p className='md:text-base lg:text-base text-sm font-normal text-slate-500'>{user?.number}</p>
          </div>
          <div className='md:flex lg:flex hidden items-center justify-center rounded-md  border-2 border-blue-500  bg-blue-500 p-3 w-[100px]'>
          <button className="text-lg font-bold  text-white ">EDIT</button>
          </div>
         </div>

         <div className='flex items-center justify-center mt-14'>
          <div className='flex items-center md:gap-36 lg:gap-36 gap-3'>
            <Link href='/about'>
              <p className='md:text-xl lg:text-xl  text-xs font-semibold text-blue-500'>About</p>
            </Link>
            <Link href='/education'>
              <p className='md:text-xl lg:text-xl text-xs font-semibold text-blue-500'>Education</p>
            </Link>
            <Link href='/skill'>
              <p className='md:text-xl lg:text-xl text-xs font-semibold text-blue-500'>Skills</p>
            </Link>
            <Link href='/experience'>
              <p className='md:text-xl lg:text-xl text-xs font-semibold text-blue-500'>Experience</p>
            </Link>
            <Link href='/certification'>
              <p className='md:text-xl lg:text-xl text-xs font-semibold text-blue-500'>Certification</p>
            </Link>
          </div>
         </div>
        </>
    );

}

export default About;