"use client";
import { useState, useContext } from "react";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { PostContext } from "@/context/PostContext";



const Navbar = () =>  {
    const { user } = useContext(PostContext);
    return (
    <div className="flex items-center justify-between  p-3 z-20 fixed h-[88px]  border-b border-gray-300 w-full  ">
        <div className="flex items-center justify-center  -mt-3 ">
            <div className="flex items-center gap-5  ">
            <Image src="/images/icon.svg" alt="logo" width={24} height={24} className="shrink-0 object-contain"  />
            </div>
            <div className="flex items-center  justify-center">
            <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={59} height={27} className="shrink-0 object-contain" />
            </Link>
            </div>
        </div>

        <div className="flex items-center  gap-[16px] space-x-4 w-[304px] h-[57px] ">
            <div className="flex items-center justify-center">
            <Image src="/images/bell.svg" alt="logo" width={24} height={24}  />
            </div>

            <div className="w-[263px] h-[54px] flex items-center gap-[10px] pt-[10px] pb-[10px] pl-[8px] pr-[8px] border-[1.024px] border-[#E8EFF7] rounded-[8px] ">
             <div >
             <Image src="/images/profile.png" alt="logo" width={33} height={33} className="flex items-center border rounded-md object-contain bg-[#FFA78D]"  />
             </div>
             <div className="flex flex-col  w-[168px]">
               <div className="h-[14px]">
                <p className="text-[10px] font-[500] leading-[normal]  text-[#373B5C]">Welcome back,</p>
               </div>
               <div className="h-[24px]">
               <p className="text-[17px] font-[500] leading-[normal] text-[#373B5C]">{user?.username}</p>
                </div>
             </div>
             
             <div>
                <Image src="/images/arrow-down.svg" alt="logo" width={24} height={24}   />
             </div>
            </div>


            

        </div>

      
    </div>
  );

}
export default Navbar;