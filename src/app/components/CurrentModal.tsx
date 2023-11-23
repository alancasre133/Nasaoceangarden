"use client"

import { useSearchParams } from "next/navigation"
import { ModalIds } from "../types.d"
import { SectionPreviewModal } from "./Modal"
import { ELEMENTS } from "../constants"

export function CurrentModal() {
  const searchParams = useSearchParams()

  const modal = searchParams.get("modal")

  const currentModalId: ModalIds = modal || ""
  const currentModal = ELEMENTS[currentModalId]

  if (!currentModal) return null

  return <SectionPreviewModal {...currentModal} />
}
