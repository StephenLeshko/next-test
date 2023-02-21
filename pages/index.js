import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { GiChefToque } from "react-icons/gi";

import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const changePage = () => {
    
    router.push('/Improv')
  }

  return (
    <div>
      <h1>Chef It Up!</h1>
      <h3>An application for making fun, AI generated recipes</h3>
      <button onClick={changePage}>
        <GiChefToque/>Impromptu Recipe
      </button>
      <button onClick={console.log('dog')}>
        <GiChefToque/>Recipe Creator
      </button>
    </div>
  )
}
