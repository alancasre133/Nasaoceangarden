"use client"

import Link from "next/link"
import { Element } from "../types.d"
import { CloseIcon, RightArrowIcon } from "./Icons"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { ELEMENTS } from "../constants"

export function SectionPreviewModal({
  modalText,
  videoSrc,
  href,
  soundSrc,
  description,
}: Element) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAudioPlaying, setIsAudioPlaying] = useState(true)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio2 = new Audio(`/audio/${soundSrc}`)
    setAudio(audio2)
    audio2.play()

    return () => {
      if (audio2) {
        audio2.pause()
        setAudio(null)
      }
    }
  }, [])

  const closeModal = () => {
    if (audio) {
      audio.pause()
      setAudio(null)
    }
    router.push(pathname)
  }

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
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-8 py-24 h-full overflow-x-hidden overflow-y-auto md:inset-0  backdrop-blur-sm">
      {/* <audio autoPlay loop src={soundSrc}></audio> */}
      <div className="max-h-[546px] relative max-w-4xl  w-full h-full m-auto">
        <div className="relative h-full w-full bg-transparent rounded-2xl overflow-clip shadow">
          {/*  */}
          <video
            className="object-center object-cover h-full w-full"
            autoPlay
            muted
            loop
            src={videoSrc}
          />
          <div className="absolute top-0 bottom-0 h-full w-full max-h-screen p-16 bg-slate-900/40 items-end justify-between flex flex-col">
            <div className="w-full flex justify-end">
              <button onClick={closeModal}>
                <CloseIcon size={40} />
              </button>
            </div>
            <header className="flex flex-col gap-1 w-full">
              <h2 className="font-semibold text-5xl">{modalText}</h2>
              <div className="flex justify-between w-full gap-10 items-baseline">
                <p>{description}</p>
                <Link
                  href={href}
                  onClick={closeModal}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl whitespace-nowrap">Learn more</span>
                  <RightArrowIcon />
                </Link>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TemplateModal() {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full m-auto"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
