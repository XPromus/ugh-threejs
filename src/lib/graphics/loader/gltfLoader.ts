import type { Scene } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadGltfModel = (path: string, scene: Scene) => {
    const loader = new GLTFLoader();
    loader.load(
        path,
        (object) => {
            object.scene.scale.set(0.001, 0.001, 0.001);
            scene.add(object.scene);
        }
    )
}