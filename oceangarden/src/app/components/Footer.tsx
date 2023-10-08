"use client";
import Link from "next/link"
import { useState } from "react";


const LINKS = [
  {
    href: "oceans",
    text: "About oceans",
    sound: "oceans",
  },
  {
    href: "phytoplankton",
    text: "Phytoplankton",
    sound: "phytoplankton",
  },
  {
    href: "gardens",
    text: "Explore gardens",
    sound: "explore",
  },
]

export function Footer() {

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = (text: string) => () => {
    
    if(!audio) {
      const audio = new Audio(`/audio/${text}.mp3`);
      setAudio(audio);
      setIsAudioPlaying(true);
      audio.play();
    } else {
      if(isAudioPlaying) {
        audio.pause();
        setAudio(null);
      } else {
        audio.play();
      }
    }
    
    
  }

  return (
    <footer className="z-10 w-full pt-4">
      <ul className="flex flex-col gap-28 md:flex-row items-center justify-center flex-wrap">
        {LINKS.map(({ href, text, sound }) => (
          <li key={href}>
            <button onClick={playAudio(sound)} className="text-3xl hover:text-[#56898F]">
              {text}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  )
}
