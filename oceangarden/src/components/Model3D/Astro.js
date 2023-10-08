"use client";
import React from 'react';

const Astro = () => {
    
  return (
    <div style={{ width: "80vw", height: "70vh" }}>
      <model-viewer
        src="astro.glb"
        alt="A 3D model of an astronaut"
        auto-rotate
        ar 
        ar-modes="webxr scene-viewer"
        style={{ width: "100%", height: "100%", backgroundColor: "#000000"}}
        shadow-intensity="10"
        rotation-per-second="0.0001"
        camera-controls="orbit" // Utiliza solo los controles de órbita
        camera-orbit="80deg 65deg 0deg"
        brightness="1.5"
        disable-pan
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
    