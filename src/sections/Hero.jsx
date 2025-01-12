import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";


const Hero = () => {

    const isSmall = useMediaQuery ({ query: '(max-width: 440px)' });
    const isMobile = useMediaQuery ({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery ({ query: '(max-width: 1024px)' });

    const sizes = calculateSizes (isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi!
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I am a JavaScript Experienced <span className="text-pink-500">Player!</span>
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
     
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          

            <HeroCamera isMobile={isMobile}>
            <HackerRoom 
             
             position={sizes.deskPosition}
             scale={sizes.deskScale} 
             rotation={[0, -Math.PI, 0]} 
             
             />
            </HeroCamera>

            <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition} />

                <Cube position={sizes.cubePosition}/>
                <Rings position={sizes.ringPosition}/>
            </group>
            
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 w-full flex left-0 right-0 z-10 c-space justify-center">
        <a href="#contact" className="w-fit">
          <Button name="Contact player" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>

      </div>
    </section>
  );
};

export default Hero;