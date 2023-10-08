"use client";
import React, { useEffect, useState } from 'react';

const Model = () => {

    const [num, setNum] = useState(0);
    const [pos, setPos] = useState("80deg 65deg 0deg");

    const [pos2, setPos2] = useState("35deg 100deg 1deg");

    const [pausar, setPausar] = useState(true);

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
    console.log("hola");
    const modelViewer = document.querySelector('model-viewer');
    if(num == 0){
        setNum(1);
        setPos("80deg 80deg 0deg");
    }
    else {
        setNum(0);
        setPos("80deg 80deg 1deg");
    }
    if(pausar === true){
        modelViewer.removeAttribute('auto-rotate');
        setPausar(false);
    } 
    
  }

  const buttonPos2 = () => {
    console.log("hola");
    const modelViewer = document.querySelector('model-viewer');
    if(num == 0){
        setNum(1);
        setPos("135deg 75deg 1deg");
    } else {
        setPos("135deg 75deg 0deg");
        setNum(0);
    }
    if(pausar === true){
        modelViewer.removeAttribute('auto-rotate');
        setPausar(false);
    } 
   
  }

  const buttonPos3 = () => {
    console.log("hola");
    const modelViewer = document.querySelector('model-viewer');
    if(num == 0){
        setNum(1);
        setPos("620deg 90deg 100deg");
    } else {
        setPos("620deg 90deg 101deg");
        setNum(0);
    }
    if(pausar === true){
        modelViewer.removeAttribute('auto-rotate');
        setPausar(false);
    } 
   
  }

  return (
    <div>
        <button onClick={buttonPos}
            > 
            Pacifico
        </button>
        <button onClick={buttonPos2}
            > 
            Atlantico
        </button>
        <button onClick={buttonPos3}
            > 
            Indico
        </button>
        <div style={{ width: "100vw", height: "100vh" }}>
            <model-viewer
                src="earth.glb"
                alt="A 3D model of an astronaut"
                auto-rotate
                ar 
                style={{ width: "100%", height: "100%", backgroundColor: "transparent"}}
                shadow-intensity="10"
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
    