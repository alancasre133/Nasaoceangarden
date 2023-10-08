"use client";
import { isMobile } from 'react-device-detect';
import Astro from '@/components/Model3D/Astro';
import EarthModel from '@/components/Model3D/Earth';

const Model = () => {
    return (
        <div>
            {isMobile ? 
                <Astro /> : 
                <EarthModel />
                }
        </div>
    );
}

export default Model;