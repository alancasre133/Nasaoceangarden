"use client"

import Model from "@/components/Model3D/Earth"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useEffect, useState } from "react"

const Home = () => {
  const [num, setNum] = useState(0)
  const [pos, setPos] = useState("80deg 65deg 0deg")

  const [pos2, setPos2] = useState("35deg 100deg 1deg")

  const [pausar, setPausar] = useState(true)

  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer")

    if (modelViewer) {
      modelViewer.setAttribute("camera-orbit", pos)

      // Add a click event listener to the model-viewer component
      modelViewer.addEventListener("click", function (event) {
        // Handle the click event here
        console.log("Model clicked!", event)
        // You can perform any action or interaction you want here
      })
    }
  }, [])

  const buttonPos = () => {
    const modelViewer = document.querySelector("model-viewer")
    if (num == 0) {
      setNum(1)
      setPos("80deg 80deg 0deg")
    } else {
      setNum(0)
      setPos("80deg 80deg 1deg")
    }
    if (pausar === true) {
      modelViewer?.removeAttribute("auto-rotate")
      setPausar(false)
    }
  }

  const buttonPos2 = () => {
    const modelViewer = document.querySelector("model-viewer")
    if (num == 0) {
      setNum(1)
      setPos("135deg 75deg 1deg")
    } else {
      setPos("135deg 75deg 0deg")
      setNum(0)
    }
    if (pausar === true) {
      modelViewer?.removeAttribute("auto-rotate")
      setPausar(false)
    }
  }

  const buttonPos3 = () => {
    const modelViewer = document.querySelector("model-viewer")
    if (num == 0) {
      setNum(1)
      setPos("620deg 90deg 100deg")
    } else {
      setPos("620deg 90deg 101deg")
      setNum(0)
    }
    if (pausar === true) {
      modelViewer?.removeAttribute("auto-rotate")
      setPausar(false)
    }
  }

  const buttonPos4 = () => {
    const modelViewer = document.querySelector("model-viewer")
    if (num == 0) {
      setNum(1)
      setPos("0deg 0deg 1deg")
    } else {
      setPos("0deg 0deg 0deg")
      setNum(0)
    }
    if (pausar === true) {
      modelViewer?.removeAttribute("auto-rotate")
      setPausar(false)
    }
  }

  const buttonPos5 = () => {
    const modelViewer = document.querySelector("model-viewer")
    if (num == 0) {
      setNum(1)
      setPos("180deg 180deg 1deg")
    } else {
      setPos("180deg 180deg 0deg")
      setNum(0)
    }
    if (pausar === true) {
      modelViewer?.removeAttribute("auto-rotate")
      setPausar(false)
    }
  }

  const OCEANS = [
    {
      text: "Pacific Ocean",
      fn: buttonPos,
      description: `The Pacific Ocean, the world's largest and deepest, spans a vast expanse in the western hemisphere. Characterized by its vastness and diversity, it harbors a rich marine biodiversity, from majestic whales to tiny planktonic organisms. Additionally, the Pacific is prone to seismic and volcanic activity due to its location in the "Ring of Fire," making it a geologically active region. Its name, "Pacific," can be deceiving, as it also witnesses powerful storms and tropical cyclones that form in its warm waters.`,
    },
    {
      text: "Atlantic Ocean",
      fn: buttonPos2,
      description: `The Atlantic Ocean is the second-largest ocean on Earth, situated between the Americas to the west and Europe and Africa to the east. It features a relatively narrow and elongated shape compared to other oceans. The Atlantic is known for its strong ocean currents, including the Gulf Stream, which has a significant impact on the climate of the regions it flows through, and it serves as a vital route for maritime trade and transportation.`,
    },
    {
      text: "Indian Ocean",
      fn: buttonPos3,
      description: `The Indian Ocean, the third-largest ocean in the world, is known for its warm waters and diverse marine life. It is bordered by Africa, Asia, Australia, and the Indian subcontinent. The Monsoon winds bring heavy rains to the coastal regions, influencing the climate of the surrounding countries. The Indian Ocean is also famous for its coral reefs, including the Great Barrier Reef off the coast of Australia.`,
    },
    {
      text: "Antartic Ocean",
      fn: buttonPos4,
      description: `The Southern Ocean, also known as the Antarctic Ocean, encircles Antarctica and is characterized by its frigid waters and extreme cold. It features a unique ecosystem with abundant marine life, including penguins, seals, and various species of whales. This ocean plays a crucial role in regulating the Earth's climate, as it circulates cold, nutrient-rich waters around the globe, impacting weather patterns and ocean currents.`,
    },
    {
      text: "Artic Ocean",
      fn: buttonPos5,
      description: `The Arctic Ocean, located in the northern polar region, is the smallest and shallowest of the world's oceans. It is largely covered by ice throughout the year, with ice floes and icebergs prevalent. The Arctic ecosystem is unique, hosting polar bears, seals, and numerous marine species adapted to extreme cold. It plays a critical role in global climate regulation, with its ice cap reflecting sunlight and influencing weather patterns.`,
    },
  ]

  const [shownOcean, setShownOcean] = useState<any>(OCEANS[0])

  const showOceanDescription = ({
    text: oceanText,
    fn,
  }: {
    text: string
    fn: Function
  }) => {
    fn()

    const ocean = OCEANS.find(({ text }) => oceanText === text)
    if (ocean?.text === shownOcean?.text) {
      setShownOcean(null)
      return
    }

    setShownOcean(ocean)
  }

  const [parent] = useAutoAnimate(/* optional config */)

  return (
    <div className="flex w-full h-full gap-20">
      <Model cameraOrbit={pos} />
      <header
        ref={parent}
        className="w-9/12 flex flex-col gap-10 justify-center"
      >
        {OCEANS.map(({ text, fn, description }) => (
          <article>
            <button
              key={text}
              onClick={() => showOceanDescription({ text, fn })}
              className="text-xl whitespace-nowrap hover:text-[#56898F]"
            >
              {shownOcean?.text === text && "🚀 "}
              {text}
            </button>
            {shownOcean?.text === text && (
              <p className="text-[#DCDCDC]">{description}</p>
            )}
          </article>
        ))}
      </header>
    </div>
  )
}

export default Home
