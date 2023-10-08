"use client"

import Model from "@/components/Model3D/Earth"
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

  return (
    <div className="w-full h-full">
      <header>
        <button onClick={buttonPos}>Pacifico</button>
        <button onClick={buttonPos2}>Atlantico</button>
        <button onClick={buttonPos3}>Indico</button>
        <button onClick={buttonPos4}>Artico</button>
        <button onClick={buttonPos5}>Artantico</button>
      </header>
      <Model cameraOrbit={pos} />
    </div>
  )
}

export default Home
