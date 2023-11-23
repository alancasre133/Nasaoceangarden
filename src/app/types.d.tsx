import { ELEMENTS } from "./constants"

export type Element = {
  id: string
  videoSrc: string
  href: string
  soundSrc: string
  closingSoundSrc: string
  modalText: string
  linkText: string
  description?: string
}

export type ModalIds = keyof typeof ELEMENTS | null
