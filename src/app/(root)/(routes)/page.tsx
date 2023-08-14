"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the current path is the root URL
    if (pathname === '/') {
      router.push('/about');
    }
  }, []);


  return <div></div>;
}
