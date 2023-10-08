"use client"

import { useState } from "react"
import { Logo } from "./Logo"
import { Headphones, HeadphonesOff } from "./Icons"

export function Header() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const toggleAudio = () => {
    setIsAudioPlaying((state) => !state)
  }

  return (
    <header className="flex gap-4 justify-between items-center w-full py-8 z-10">
      <Logo />
      <button
        onClick={toggleAudio}
        className="flex items-center justify-center"
      >
        {isAudioPlaying ? <HeadphonesOff /> : <Headphones />}
      </button>
    </header>
  )
}
