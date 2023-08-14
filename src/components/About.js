import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <>
        <div className='flex items-center  gap-36 w-[1024px] mx-auto    p-4'>
          <div className='flex item-center border rounded-full p-2 bg-[#FFA78D] overflow-hidden'>
            <Image src="/images/profile.png" alt="logo" width={100} height={100} />
          </div>
          <div className='flex flex-col'>
            <p className='text-xl font-semibold'>RISHABH MAURYA</p>
            <p className='text-base font-normal text-slate-600'>rishabhmaurya7654@gmail.com</p>
            <p className='text-base font-normal text-slate-500'>+91999999999</p>
          </div>
          <div className='flex items-center justify-center rounded-md  border-2 border-blue-500  bg-blue-500 p-3 w-[100px]'>
          <button className="text-lg font-bold text-white ">Edit</button>
          </div>
         </div>

         <div className='flex items-center justify-center mt-14'>
          <div className='flex items-center gap-36'>
            <Link href='/about'>
              <p className='text-xl font-semibold text-blue-500'>About</p>
            </Link>
            <Link href='/education'>
              <p className='text-xl font-semibold text-blue-500'>Education</p>
            </Link>
            <Link href='/skill'>
              <p className='text-xl font-semibold text-blue-500'>Skills</p>
            </Link>
            <Link href='/experience'>
              <p className='text-xl font-semibold text-blue-500'>Experience</p>
            </Link>
            <Link href='/certification'>
              <p className='text-xl font-semibold text-blue-500'>Certification</p>
            </Link>
          </div>
         </div>
        </>
    );

}

export default About;