import './App.css'
import { CheckFat, Trash } from '@phosphor-icons/react'
import EmojiGrid from './components/EmojiGrid'
import React, { useRef } from "react";

function App() {
  const emojiGrid = useRef(null)

  function getRandomEmoji() {
    const emojis = [
      "😀", "😂", "😍", "😎", "🤔", 
      "😅", "🥳", "😴", "🤩", "😇", 
      "😜", "🤯", "🥶", "🤗", "😷",
      "🤢", "🤠", "🤡", "🤓", "🤑",
      "🤪", "🤫", "🤭", "🧐", "🤥",
    ];
    
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

  function getSlang() {
    const slangs = [
      "Mood Right Now", "Current Vibe", "Feeling These RN", "Emotion for Today", "State of Mind",
      "Current Mood", "Current State", "Current Feeling", "Current Emotion", "Current Vibe",
    ]

    const randomIndex = Math.floor(Math.random() * slangs.length);
    return slangs[randomIndex];
  }

  return (
    <>
      <div className='absolute bg-amber-400 h-full w-full flex flex-col items-center'>

        <div className='flex justify-center mt-10 text-3xl font-bold bg-amber-200 w-1/4'>
          <h1> Mood Board </h1>
        </div>

        <div className='flex justify-center mt-10 bg-green-200 p-4 w-1/4 aspect-square'>
          <div className='grid grid-cols-3 gap-4 w-full h-full'>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
            <EmojiGrid emoji={getRandomEmoji()}/>
          </div>
        </div>

        <div className='flex justify-center mt-1 bg-green-200 p-4 w-1/4 h-fit text-black'>
          {getSlang()}
        </div>

      </div>
    </>
  )
}

export default App
