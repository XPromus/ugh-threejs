import type { Scene } from "three";
import * as THREE from "three";

export const createSkybox = (scene: Scene) => {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        "src/lib/assets/skybox/clouds1_east.png",
        "src/lib/assets/skybox/clouds1_west.png",
        "src/lib/assets/skybox/clouds1_up.png",
        "src/lib/assets/skybox/clouds1_down.png",
        "src/lib/assets/skybox/clouds1_north.png",
        "src/lib/assets/skybox/clouds1_south.png",
    ]);
    scene.background = texture;
}