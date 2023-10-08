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


export const OCEANS = {
  pacific: {
    title: "Pacific Ocean",
    description: "The Pacific Ocean, the world's largest and deepest, spans a vast expanse in the western hemisphere. Characterized by its vastness and diversity, it harbors a rich marine biodiversity, from majestic whales to tiny planktonic organisms. Additionally, the Pacific is prone to seismic and volcanic activity due to its location in the \"Ring of Fire,\" making it a geologically active region. Its name, \"Pacific,\" can be deceiving, as it also witnesses powerful storms and tropical cyclones that form in its warm waters.",
    images: [
      "pacifico1.png",
      "pacifico2.png",
      "pacifico3.png",
    ]
  }, 
  atlantic: {
    title: "Atlantic Ocean",
    description: "The Atlantic Ocean is the second-largest ocean on Earth, situated between the Americas to the west and Europe and Africa to the east. It features a relatively narrow and elongated shape compared to other oceans. The Atlantic is known for its strong ocean currents, including the Gulf Stream, which has a significant impact on the climate of the regions it flows through, and it serves as a vital route for maritime trade and transportation.",
    images: [
      "atlantico1.png",
      "atlantico2.png",
      "atlantico3.png",
    ]
    
  },
  indian: {
    title: "Indian Ocean",
    description: "The Indian Ocean, the third-largest ocean in the world, is known for its warm waters and diverse marine life. It is bordered by Africa, Asia, Australia, and the Indian subcontinent. The Monsoon winds bring heavy rains to the coastal regions, influencing the climate of the surrounding countries. The Indian Ocean is also famous for its coral reefs, including the Great Barrier Reef off the coast of Australia.",
    images: [
      "indian1.png",
      "indian2.png",
      "indian3.png",
    ]
  },
  antartic: {
    title: "Antartic Ocean",
    description: "The Southern Ocean, also known as the Antarctic Ocean, encircles Antarctica and is characterized by its frigid waters and extreme cold. It features a unique ecosystem with abundant marine life, including penguins, seals, and various species of whales. This ocean plays a crucial role in regulating the Earth's climate, as it circulates cold, nutrient-rich waters around the globe, impacting weather patterns and ocean currents.",
    images: [
      "antartic1.png",
      "antartic2.png",
      "antartic3.png",
    ]
  },
  artic: {
    title: "Artic Ocean",
    description: "The Arctic Ocean, located in the northern polar region, is the smallest and shallowest of the world's oceans. It is largely covered by ice throughout the year, with ice floes and icebergs prevalent. The Arctic ecosystem is unique, hosting polar bears, seals, and numerous marine species adapted to extreme cold. It plays a critical role in global climate regulation, with its ice cap reflecting sunlight and influencing weather patterns.",
    images: [
      "image_26.png",
      "image_27.png",
      "image_28.png",
    ]
  },

}
