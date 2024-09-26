
import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { PerspectiveCamera } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import HackerRoom from '../components/HackerRoom.jsx';
import { calculateSizes } from '../constants/index.js';
import { useMediaQuery } from 'react-responsive';
import HeroCamera from '../components/HeroCamera.jsx';
import PythonLogo from '../components/PythonLogo.jsx';

const Hero = () => {
    // const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //    rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //    rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //    rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //    scale: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },


    // })

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
      <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
        Hi, My name is Faith, I am Famouzcoder <span className="waving-hand">👋🙋‍♂️</span>
      </p>
      <p className="hero_tag text-gray_gradient">Building Web Products & Brands</p>
    </div>

    <div className="w-full h-full absolute inset-0">
    <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
          <Leva hidden />

            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

              {/* <HackerRoom
              position={sizes.deskPosition}
              scale={sizes.deskScales}
              rotation={[0, -Math.PI, 0]}
            // position= {[controls.positionX, controls.positionY, controls.positionZ]}
            // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
            // scale= {[controls.scale, controls.scale, controls.scale]}
              /> */}

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <PythonLogo position={sizes.pythonLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

