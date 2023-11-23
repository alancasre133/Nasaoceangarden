"use client"

import { useState } from "react"
import { Logo } from "./Logo"
import { Volume, VolumeOff } from "./Icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSectionLinks } from "../hooks/useSectionLinks"
import { isMobile } from "react-device-detect"

const ROOT_PATH = "/"

const isRootPath = (pathname: string) => pathname === ROOT_PATH

const HomeLinkContent = () => {
  // const pathname = usePathname()

  return <Logo />

  // return (
  //   <>
  //     <LeftArrowIcon />
  //     <span className="font-medium whitespace-nowrap">Home</span>
  //   </>
  // )
}

export function Header() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const toggleAudio = () => {
    setIsAudioPlaying((state) => !state)
  }

  const pathname = usePathname()
  const { bareLinks } = useSectionLinks()

  const isRoot = pathname === ROOT_PATH

  return (
    <header className="flex gap-16 justify-between items-center w-full py-4 z-50 text-lg">
      <Link href="/" className="flex gap-4 items-center hover:text-slate-300">
        <HomeLinkContent />
      </Link>
      {isMobile === false && (
        <>
          <nav className="w-full">
            <ul className="flex items-center justify-end gap-11 list-none">
              {isRoot === false &&
                bareLinks.map(({ href, text }) => (
                  <li key={href}>
                    <Link href={href} className="hover:underline">
                      {text}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <button
            onClick={toggleAudio}
            className="flex items-center justify-center"
          >
            {isAudioPlaying ? <VolumeOff /> : <Volume />}
          </button>
        </>
      )}
    </header>
  )
}
