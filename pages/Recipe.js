import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { AiFillCalculator } from "react-icons/ai";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <p>Recipe Maker<AiFillCalculator className="dog"/></p>
    </div>
  )
}
