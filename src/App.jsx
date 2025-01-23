import './App.css'
import EmojiGrid from './components/EmojiGrid'
import React, { useRef } from "react";
import { toPng } from "html-to-image";

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
      "Mood Right Now",
      "Current Vibe",
      "Feeling These RN",
      "Emotion for Today",
      "Current Mood",
      "Vibe Check",
      "Feeling This RN",
      "The Feels",
      "In My Feels",
      "Mood AF",
      "All the Feels",
      "How I'm Feeling",
      "Emotion of the Day",
      "Big Mood",
      "The Vibes",
      "What's the Mood?",
      "State of Mind",
      "In My Vibes",
      "Feelings Right Now",
      "The Energy RN",
      "Daily Feels",
      "Feeling It",
      "What’s the Vibe?",
      "Today's Energy"
    ];

    const randomIndex = Math.floor(Math.random() * slangs.length);
    return slangs[randomIndex];
  }

  const handleExport = () => {
    if (!emojiGrid.current) {
      console.error("Emoji grid reference is not available.");
      return;
    }

    toPng(emojiGrid.current, { backgroundColor: "#000000" }) // Match the Tailwind background
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "emoji-grid.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Failed to export image:", error);
      });
  };

  return (
    <>
      <div className='absolute h-full w-full flex flex-col items-center pt-10'>
        <div className=' w-1/4 flex flex-col items-center' ref={emojiGrid}>

          {/* Title */}
          <span className=' w-full text-center bg-emerald-200 text-black p-4 rounded'>
            <h1 className='text-3xl font-bold'>Mood Board</h1>
          </span>

          {/* Mood Board */}
          <div className='flex justify-center mt-1 p-4 w-full aspect-square bg-emerald-100 rounded'>
            <div className='grid grid-cols-3 w-full'>
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
              <EmojiGrid emoji={getRandomEmoji()} />
            </div>
          </div>

          {/* Quoted Slang */}
          <div className='flex justify-center mt-1 p-4 w-full h-fit text-black bg-emerald-300 rounded font-bold'>
            {getSlang()}
          </div>

        </div>


        <div className='flex mt-1 p-4 w-1/4 h-fit text-black justify-center gap-5'>
          <button className="btn btn-outline btn-accent rounded" onClick={handleExport}>Download</button>
          <button className="btn btn-outline btn-accent rounded" onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </div>
    </>
  )
}

export default App
