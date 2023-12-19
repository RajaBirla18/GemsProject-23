// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import LandingPage from '@/components/landingPage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <LandingPage/>
    </>
  )
}
