import { Element } from "./types.d"

export const ELEMENTS: Record<string, Element> = {
  oceans: {
    id: "oceans",
    modalText: "Oceans",
    linkText: "About oceans",
    videoSrc: "/video/ocean.mp4",
    href: "/oceans",
    soundSrc: "oceans.mp3",
    closingSoundSrc: "oceans.mp3",
  },
  phytoplankton: {
    id: "phytoplankton",
    modalText: "Phytoplankton",
    linkText: "Phytoplankton",
    videoSrc: "/video/phytoplankton.mp4",
    href: "/phytoplankton",
    soundSrc: "underwater.mp3",
    closingSoundSrc: "underwater.mp3",
  },
  gardens: {
    id: "gardens",
    modalText: "Explore gardens",
    linkText: "Explore gardens",
    videoSrc: "/video/gardens.mp4",
    href: "/gardens",
    soundSrc: "planc.mp3",
    closingSoundSrc: "planc.mp3",
  },
}
