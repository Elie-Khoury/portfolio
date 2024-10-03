/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react"; // Import useRef
import * as THREE from "three";

import vertexShader from "../../../assets/shaders/vertex.glsl";
import vertexPars from "../../../assets/shaders/vertex_pars.glsl";
import vertexMain from "../../../assets/shaders/vertex_main.glsl";
import fragmentShader from "../../../assets/shaders/fragment.glsl";
import fragmentPars from "../../../assets/shaders/fragment_pars.glsl";
import fragmentMain from "../../../assets/shaders/fragment_main.glsl";

function WaveShader() {
  const shaderRef = useRef();

  useFrame(({ clock }) => {
    // Ensure that the shader and its uniform are defined before updating
    if (
      shaderRef.current &&
      shaderRef.current.uniforms &&
      shaderRef.current.uniforms.uTime
    ) {
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime() / 4; // Update uniform
    }
  });

  return (
    <meshStandardMaterial
      onBeforeCompile={(shader) => {
        // Add the uTime uniform to the shader
        shader.uniforms.uTime = { value: 0 };

        // Inject GLSL code into <displacementmap_pars_vertex>
        const parsVertexString = `#include <displacementmap_pars_vertex>`;
        shader.vertexShader = shader.vertexShader.replace(
          parsVertexString,
          parsVertexString + "\n" + vertexPars
        );

        // Inject GLSL code into <displacementmap_vertex>
        const mainVertexString = `#include <displacementmap_vertex>`;
        shader.vertexShader = shader.vertexShader.replace(
          mainVertexString,
          mainVertexString + "\n" + vertexMain
        );

        const parsFragmentString = /* glsl */ `#include <bumpmap_pars_fragment>`;
        shader.fragmentShader = shader.fragmentShader.replace(
          parsFragmentString,
          parsFragmentString + "\n" + fragmentPars
        );

        const mainFragmentString = /* glsl */ `#include <normal_fragment_maps>`;
        shader.fragmentShader = shader.fragmentShader.replace(
          mainFragmentString,
          mainFragmentString + "\n" + fragmentMain
        );

        shaderRef.current = shader; // Assign shader to ref for uniform updates
      }}
    />
  );
}

function Model() {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 2.2] }}>
      <directionalLight color="#9303fc" intensity={1} position={[-2, 0, 2]} />
      <directionalLight color="#d294ff" intensity={0.7} position={[2, -5, 2]} />
      <ambientLight color="#a09be8" intensity={0.5} />
      <mesh>
        <icosahedronGeometry args={[1, 300]} />
        <WaveShader /> {/* Use the WaveShader component here */}
      </mesh>
    </Canvas>
  );
}

export default Model;
