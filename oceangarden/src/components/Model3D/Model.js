import React, { useEffect, useState } from 'react';

const Model = () => {

    const [num, setNum] = useState(0);
    const [pos, setPos] = useState("80deg 65deg 0deg");

  useEffect(() => {
    const modelViewer = document.querySelector('model-viewer');

    if (modelViewer) {
        modelViewer.setAttribute('camera-orbit', pos);
      // Add a click event listener to the model-viewer component
      modelViewer.addEventListener('click', function (event) {
        // Handle the click event here
        console.log('Model clicked!', event);
        // You can perform any action or interaction you want here
      });
    }
  }, []);

  const buttonPos = () => {
    if(num == 0){
        setNum(1);
        setPos("0deg 0deg 1deg");
    }
    else {
        setNum(0);
        setPos("0deg 0deg 0deg");
    }
  }

  const buttonPos2 = () => {
    if(num == 0){
        setNum(1);
        setPos("0deg 100deg 1deg");
    } else {
        setPos("0deg 100deg 0deg");
        setNum(0);
    }
  }

  return (
    <div>
        <button onClick = {buttonPos}
            > 
            Pacifico
        </button>
        <button onClick = {buttonPos2}
            > 
            Atlantico
        </button>
        <button onClick = {buttonPos2}
            > 
            Indico
        </button>
        <div style={{ width: "100vw", height: "100vh" }}>
            <model-viewer
                src="earth.glb"
                alt="A 3D model of an astronaut"
                auto-rotate
                ar 
                ar-modes="webxr scene-viewer"
                style={{ width: "100%", height: "100%", backgroundColor: "#000000"}}
                shadow-intensity="10"
                rotation-per-second="0.0001"
                camera-controls // Utiliza solo los controles de órbita
                camera-orbit={pos}
                brightness="1.5"
                disable-pan
            >
                
            </model-viewer>
            <script
                async
                type="module"
                src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
            ></script>
        </div>
    </div>
    
  );
};

export default Model;
    