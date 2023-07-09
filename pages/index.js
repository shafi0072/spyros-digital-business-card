import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Page1 from '@/src/components/app/Root/Page1/Page1'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
 
  useEffect(() => {
    router.push('/general')
  }, [])
  return (
   <></>
  )
}
