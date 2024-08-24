import { Canvas } from "@react-three/fiber";
import JBL from "./JBL";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const CanvasContainer = ({ tryMode, selectedColor }) => {
  const controlRef = useRef();

  return (
    <div
      id="model"
      className={`w-full h-screen sticky top-0 ${
        tryMode ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Canvas camera={{ fov: 25 }}>
        <JBL
          controlRef={controlRef}
          selectedColor={selectedColor}
          tryMode={tryMode}
        />
        <OrbitControls
          ref={controlRef}
          enableRotate={tryMode}
          enableZoom={tryMode}
          enablePan={tryMode}
        />
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
