"use client"

const EarthModel = ({ cameraOrbit = "80deg 65deg 0deg" }) => {
  return (
    <>
      <model-viewer
        src="earth.glb"
        alt="A 3D model of an astronaut"
        auto-rotate
        ar
        ar-modes="webxr scene-viewer"
        style={{
          width: "100%",
          height: "50vh",
          backgroundColor: "transparent",
        }}
        shadow-intensity="10"
        rotation-per-second="0.0001"
        camera-controls // Utiliza solo los controles de órbita
        camera-orbit={cameraOrbit}
        disable-zoom
        brightness="1.5"
        disable-pan
      ></model-viewer>
      <script
        async
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></script>
    </>
  )
}

export default EarthModel
