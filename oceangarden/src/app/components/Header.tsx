"use client"

import { useState } from "react"
import { Logo } from "./Logo"
import { Headphones, HeadphonesOff } from "./Icons"
import Link from "next/link"

export function Header() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const toggleAudio = () => {
    setIsAudioPlaying((state) => !state)
  }

  return (
    <header className="flex gap-4 justify-between items-center w-full py-8 z-10">
      <Link href="/">
        <Logo />
      </Link>
      <button
        onClick={toggleAudio}
        className="flex items-center justify-center"
      >
        {isAudioPlaying ? <HeadphonesOff /> : <Headphones />}
      </button>
    </header>
  )
}
