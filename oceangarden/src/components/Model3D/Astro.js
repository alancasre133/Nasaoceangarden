"use client";

const Astro = () => {
    
  return (
    <div style={{ width: "80vw", height: "70vh" }}>
      <model-viewer
        src="astro.glb"
        alt="A 3D model of an astronaut"
        auto-rotate
        ar 
        ar-modes="webxr scene-viewer"
        style={{ width: "100%", height: "100%", backgroundColor: "transparent"}}
        camera-controls
      ></model-viewer>
      <script
        async
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></script>
    </div>
  );
};

export default Astro;
    