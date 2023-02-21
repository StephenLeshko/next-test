import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { AiFillCalculator } from "react-icons/ai";



const inter = Inter({ subsets: ['latin'] })

export default function About() {

  return (
    <div>
      <p>About Page<AiFillCalculator className="dog"/></p>
    </div>
  )
}
