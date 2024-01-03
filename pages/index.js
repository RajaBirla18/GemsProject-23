// import Head from 'next/head'
// import Image from 'next/image'
// const inter = Inter({ subsets: ['latin'] })
// import styles from '@/styles/Home.module.css'

import { Inter } from 'next/font/google'
import LandingPage from '@/components/landingPage'
import LayoutPage from '@/components/layout'

export default function Home() {
  return (
    <>
    <LandingPage/>
    </>
  )
}
Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>
}
