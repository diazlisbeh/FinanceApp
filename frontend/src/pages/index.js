import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useContext, useEffect } from 'react'
import { MyContext } from '@/context/context'
import { useRouter } from 'next/router' 

const inter = Inter({ subsets: ['latin'] })

export default function inde() {
  const router = useRouter();
const {login}  = useContext(MyContext);

useEffect(()=>{
  router.push('/Login')
})

  return (
    <>
    <p>Vamo a ver klk</p>
    <button onClick={() => router.push('/Login')}>dale bro</button>
    </>
  )
}
