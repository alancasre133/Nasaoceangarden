"use client"
import Link from "next/link"
import { useState } from "react"
import { ELEMENTS } from "../constants"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()

  const FOOTER_LINKS = Object.values(ELEMENTS).map(
    ({ id, linkText, soundSrc }) => ({
      href: `${pathname}?modal=${id}`,
      text: linkText,
      sound: soundSrc,
    }),
  )

  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const playAudio = (text: string) => () => {
    if (!audio) {
      const audio = new Audio(`/audio/${text}`)
      setAudio(audio)
      setIsAudioPlaying(true)
      audio.play()
    } else {
      if (isAudioPlaying) {
        audio.pause()
        setAudio(null)
      } else {
        audio.play()
      }
    }
  }

  return (
    <footer className="z-10 w-full pt-4">
      <ul className="flex flex-col gap-x-28 md:flex-row items-center justify-center flex-wrap gap-y-1">
        {FOOTER_LINKS.map(({ href, text, sound }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={playAudio(sound)}
              className="text-3xl hover:text-[#56898F]"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
