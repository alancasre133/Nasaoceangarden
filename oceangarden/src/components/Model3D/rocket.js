"use client";
import React, { useEffect } from 'react';

const Atlas = () => {
    
  useEffect(() => {
    const modelViewer = document.querySelector('model-viewer');

    if (modelViewer) {
      // Add a click event listener to the model-viewer component
      modelViewer.addEventListener('click', function (event) {
        // Handle the click event here
        console.log('Model clicked!', event);
        // You can perform any action or interaction you want here
      });
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <model-viewer
        src="atlas.glb"
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

export default Atlas;
    