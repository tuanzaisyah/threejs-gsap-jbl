import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const JBL = ({ controlRef, selectedColor, tryMode }) => {
  const { nodes, materials } = useGLTF("/jbl.glb");
  const { camera } = useThree();
  const [modelScale, setModelScale] = useState(9);
  const [modelPosition, setModelPosition] = useState([0, -0.8, -0.2]);
  const tl = gsap.timeline();

  useEffect(() => {
    const controls = controlRef.current;

    let mm = gsap.matchMedia();

    const applyAnimations = (context) => {
      let { isDesktop, isTablet, isMobile } = context.conditions;

      // Adjust scale and position based on screen size
      if (isDesktop) {
        setModelScale(9);
        setModelPosition([0, -0.8, -0.2]);
      } else if (isTablet) {
        setModelScale(7);
        setModelPosition([0, -0.7, -0.2]);
      } else if (isMobile) {
        setModelScale(6);
        setModelPosition([-0.3, -0.9, -0.2]);
      }

      tl.clear();

      tl.to(camera.position, {
        x: -0.89,
        y: 0.55,
        z: -9.95,
        scrollTrigger: {
          trigger: ".feature-1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
        .to(controls.target, {
          x: isDesktop ? -1 : isTablet ? -0.35 : -0.3,
          y: isDesktop ? 0 : isTablet ? 0 : -0.55,
          z: 0,
          scrollTrigger: {
            trigger: ".feature-1",
            start: "top bottom",
            end: "top top",
            scrub: true,
            snap: true,
            immediateRender: false,
          },
        })
        .to(camera.position, {
          x: 7.01,
          y: -2.28,
          z: -6.75,
          scrollTrigger: {
            trigger: ".feature-2",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(controls.target, {
          x: isDesktop ? 1 : isTablet ? 0.3 : -0.5,
          y: isDesktop ? 0 : isTablet ? 0 : -0.55,
          z: 0,
          scrollTrigger: {
            trigger: ".feature-2",
            start: "top bottom",
            end: "top top",
            scrub: true,
            snap: true,

            immediateRender: false,
          },
        })
        .to(camera.position, {
          x: 6.03,
          y: 4.72,
          z: -6.45,
          scrollTrigger: {
            trigger: ".feature-3",
            start: "top bottom",
            end: "top top",
            scrub: true,

            immediateRender: false,
          },
        })
        .to(controls.target, {
          x: isDesktop ? -2 : isTablet ? -0.8 : -0.55,
          y: -isDesktop ? -1 : isTablet ? -0.5 : -0.8,
          z: 0,
          scrollTrigger: {
            trigger: ".feature-3",
            start: "top bottom",
            end: "top top",
            scrub: true,
            snap: true,

            immediateRender: false,
          },
        })
        .to(camera.position, {
          x: 0.3,
          y: 4.17,
          z: 9.08,
          scrollTrigger: {
            trigger: "#personalized",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(controls.target, {
          x: isDesktop ? 0 : isTablet ? 0 : -0.29,
          y: isDesktop ? 0.1 : isTablet ? 0 : -0.3,
          z: 0,
          scrollTrigger: {
            trigger: "#personalized",
            start: "top bottom",
            end: "top top",
            scrub: true,
            snap: true,

            immediateRender: false,
          },
        });
    };

    if (tryMode) {
      const timeoutId = setTimeout(() => {
        camera.position.set(-0.6, -0.56, 9.97);

        mm.add(
          {
            isDesktop: "(min-width: 1024px)",
            isTablet: "(min-width: 768px) and (max-width: 1023px)",
            isMobile: "(max-width: 767px)",
          },
          (context) => {
            applyAnimations(context);

            return () => {
              tl.kill();
            };
          }
        );
      }, 500);

      return () => {
        clearTimeout(timeoutId);
        mm.revert();
      };
    } else {
      camera.position.set(6.8, -2.54, 6.88);

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          applyAnimations(context);

          return () => {
            tl.kill();
          };
        }
      );
    }

    return () => {
      mm.revert();
    };
  }, [tryMode, camera, controlRef]);

  useFrame(() => {
    if (controlRef.current) {
      controlRef.current.update();
    }
  });

  // change model color
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.color = new THREE.Color(selectedColor);
      material.needsUpdate = true;
    });
  }, [materials, selectedColor]);

  return (
    <>
      {/* <directionalLight castShadow position={[-2.38, 1.32, 0.74]} /> */}
      <group scale={modelScale} position={modelPosition}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Logo}
          position={[0.001, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Mic_Mesh}
          position={[0.066, 0.023, 0.024]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Speaker_Holder}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Call_Mic_Mesh}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Hinge_Holder}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Hinge}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Headband_Cap_Logo}
          position={[0, 0.16, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Headband_Sider_Outer}
          position={[0, 0.125, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Headband_Sider_Inner}
          position={[0, 0.124, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Buttons}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Slider_Switch}
          position={[-0.037, 0.02, -0.026]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials["C-Hinge_Inner"]}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.Earcup}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.AUX_Jack}
          position={[-0.026, 0.005, 0.011]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Port_Aluminum_2}
          position={[0.027, 0.005, 0.011]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Back_Chamber_Hole}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials["C-Hinge_Outer"]}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Black}
          position={[0, 0.091, 0.004]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Port_Plastic}
          position={[0.028, 0.007, 0.01]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Earcap_Logo}
          position={[-0.071, 0.041, 0.027]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.Headband_Cap}
          position={[0, 0.157, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.Earcap_Cosmetic_Ring}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.Port_Aluminum}
          position={[0.028, 0.006, 0.01]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.Ear_Cushion}
          position={[0, 0.095, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Speacker_Mesh}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.LR_Icon}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.Lower_Headband}
          position={[0, 0.172, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Upper_Headband}
          position={[0, 0.176, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.Power_LED}
          position={[-0.04, 0.025, -0.031]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.Button_LED}
          position={[-0.04, 0.025, -0.031]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.Icons}
          position={[0, 0.095, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
      </group>
    </>
  );
};

export default JBL;
useGLTF.preload("/jbl.glb");
