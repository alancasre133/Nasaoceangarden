import { usePathname } from "next/navigation"
import { ELEMENTS } from "../constants"

export const useSectionLinks = () => {
  const pathname = usePathname()

  const linksToOpenModal = Object.values(ELEMENTS).map(
    ({ id, linkText, soundSrc }) => ({
      href: `${pathname}?modal=${id}`,
      text: linkText,
      sound: soundSrc,
    }),
  )

  const bareLinks = Object.values(ELEMENTS).map(({ href, linkText }) => ({
    href,
    text: linkText,
  }))

  return {
    links: linksToOpenModal,
    bareLinks,
  }
}
