import { Canvas, useFrame, useThree } from "@react-three/fiber";
import JBL from "./JBL";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CanvasContainer = () => {
  const controlRef = useRef();
  return (
    <Canvas
      camera={{
        position: [6.8, -2.54, 6.88],
        fov: 25,
      }}
    >
      <JBL controlRef={controlRef} />
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        ref={controlRef}
      />
      <Environment preset="warehouse" />
    </Canvas>
  );
};

export default CanvasContainer;
