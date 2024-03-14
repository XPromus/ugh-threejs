import type { Group, Object3DEventMap, Scene } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

import * as THREE from "three";

export const loadFbxModel = (path: string, scene: Scene) => {
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
        "$lib/assets/haus.fbx",
        (object) => {
            object.scale.set(0.01, 0.01, 0.01);
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
