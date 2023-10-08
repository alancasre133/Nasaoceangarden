"use client"

import { useSearchParams } from "next/navigation"
import { Modal } from "../types.d"
import { SectionPreviewModal } from "./Modal"

const MODALS: Record<string, Modal> = {
  oceans: {
    text: "Oceans",
    videoSrc: "/video/ocean.mp4",
    href: "/oceans",
    soundSrc: "/audio/ocean.mp3",
    closingSoundSrc: "/audio/ocean.mp3",
  },
  phytoplankton: {
    text: "Phytoplankton",
    videoSrc: "/video/phytoplankton.mp4",
    href: "/phytoplankton",
    soundSrc: "/audio/phytoplankton.mp3",
    closingSoundSrc: "/audio/phytoplankton.mp3",
  },
  gardens: {
    text: "Explore gardens",
    videoSrc: "/video/gardens.mp4",
    href: "/gardens",
    soundSrc: "/audio/gardens.mp3",
    closingSoundSrc: "/audio/gardens.mp3",
  },
}

type ModalIds = keyof typeof MODALS | null

export function CurrentModal() {
  const searchParams = useSearchParams()

  const modal = searchParams.get("modal")

  const currentModalId: ModalIds = modal || ""
  const currentModal = MODALS[currentModalId]

  console.log({
    currentModalId,
    currentModal,
  })

  if (!currentModal) return null

  return <SectionPreviewModal {...currentModal} />
}
