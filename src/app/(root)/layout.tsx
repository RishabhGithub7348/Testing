import Navbar from "@/components/Navbar"
import About from "@/components/About"

export default function RootLayout({
    children,
  }:{
      children: React.ReactNode
  }) {
      return (
        <>
       <div className="flex flex-col h-screen bg-[#FAFBFF]">
        <div className="">
        <Navbar  />
        <div className="flex flex-col  mt-24 p-5 h-full w-full">
        <div className='flex flex-col p-3 bg-blue-100 '>
         <About />
        </div>
    </div>
        </div>
       <div className=" ">
       {children}
       </div>
       </div>
      </>
      )
  }