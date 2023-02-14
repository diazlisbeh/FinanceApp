import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useContext } from 'react'
import { MyContext } from '@/context/context'

const inter = Inter({ subsets: ['latin'] })

const {login } = useContext(MyContext);
export default function Home() {
  return (
    <>
    <p>Vamo a ver klk</p>
    <button onClick={() => login()}></button>
    </>
  )
}
