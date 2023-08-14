import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function ProfileLayout({
    children,
  }:{
      children: React.ReactNode
  }) {
      return (
         <>
          <div className="flex  h-screen">
            <Sidebar  />
            <div className="flex flex-col  w-full">
                <div className=''>
                <Navbar />
                </div>
                <div className=" mt-20">{children}</div>
            </div>
        </div>
         </>
      )
  }