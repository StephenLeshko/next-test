import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { GiBroccoli } from "react-icons/gi";
import { AiFillHome } from 'react-icons/ai'
import {useState} from 'react'

import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [recipe, setRecipe] = useState('Recipe')
  const [inputValue, setInputValue] = useState('');

  const router = useRouter()

  function handleTextChange(e){
    setInputValue(e.target.value)
  }
  function goHome(){
    router.push('/')
  }

  async function handleClick() {
    console.log('click handling')
    const response = await fetch('/api/getRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ingredients: inputValue})
    })
    const data = await response.json()
    console.log(data.result)
    setRecipe(data.result)
  }
  
  return (
    <div>
      <button onClick={goHome}><AiFillHome/></button>
      <h2>Ingredients<GiBroccoli/></h2>
      <span>Please type all your ingredients, seperated by commas</span>
      <input type="text" value={inputValue} onChange={handleTextChange}></input>
      <button className ="generate" onClick={handleClick}>Generate Recipe</button>
      <h2>Your Recipe:</h2>
      <p className="recipe">{recipe}</p>

    </div>
  )
}
