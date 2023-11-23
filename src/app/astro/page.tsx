"use client";

import Astro from "@/components/Model3D/Astro";

const Home = () => {
  return (
    <div style={{display: "flex", alignItems: "center",justifyItems:"center", flexDirection: "column" ,width: "100%", height: "100%", textAlign: "center" }}>
      <h1>
        New feature coming soon!
      </h1>
      <Astro />
      
    </div>
  );
}

export default Home;