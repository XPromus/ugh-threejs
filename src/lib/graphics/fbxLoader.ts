import type { Scene } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as THREE from "three";

export const loadFbxModel = (path: string, scene: Scene) => {
    const fbxLoader = new FBXLoader();
    console.log("Laden")
    fbxLoader.load(
        "src\\lib\\assets\\haus.fbx",
        (object) => {
            console.log("Objekt geladen.");
            object.scale.set(0.75, 0.75, 0.75);
            const targetPosition: THREE.Vector3 = new THREE.Box3().setFromObject(object).getCenter(object.position).multiplyScalar(-1);
            object.position.set(targetPosition.x, 0, targetPosition.z);
            scene.add(object);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );
}
