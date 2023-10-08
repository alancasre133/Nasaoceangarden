import dynamic from "next/dynamic";
import { isMobile } from 'react-device-detect';

const DynamicComponent = dynamic(() => {
    if(isMobile){
      return import("@/components/Model3D/Astro");
    }
    return import ("@/components/Model3D/Model"); 
  }, {
  loading: () => <p>Loading...</p>,
})

const Home = () => {
  return <DynamicComponent />
}

export default Home
