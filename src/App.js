import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import styled from "styled-components";
import * as THREE from "three";

import EarthNormalMap from "./assets/textures/8k_earth_normal_map.jpg";
import EarthNightMap from "./assets/textures/8k_earth_nightmap.jpg";
import EarthSpecularMap from "./assets/textures/8k_earth_specular_map.jpg";

const { TextureLoader } = THREE;

const Container = styled.div`
  background: linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1));
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [nightMap, normalMap, specularMap] = useLoader(TextureLoader, [
    EarthNightMap,
    EarthNormalMap,
    EarthSpecularMap,
  ]);

  return (
    <Container>
      <Canvas>
        <Suspense fallback={false}>
          <ambientLight intensity={7} />
          <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshPhongMaterial color="#81bbff" specularMap={specularMap} />
            <meshStandardMaterial map={nightMap} normalMap={normalMap} />
            <OrbitControls
              enablePan={true}
              enableRotate={true}
              enableZoom={true}
              enableDamping={true}
              rotateSpeed={0.3}
              panSpeed={0.3}
              zoomSpeed={0.3}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default App;
