import type { Scene } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export const loadFbxHouse = (scene: Scene) => {
    const fbxLoader = new FBXLoader();
    console.log("Laden")
    fbxLoader.load(
        "src\\lib\\assets\\haus.fbx",
        (object) => {
            console.log("Objekt geladen.");
            object.scale.set(1, 1, 1);
            object.position.set(0, 0, -5);
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

export const loadFbxOutside = (scene: Scene) => {
    const fbxLoader = new FBXLoader();
    console.log("Laden")
    fbxLoader.load(
        "src\\lib\\assets\\Außenbereich_23.05.2024.fbx",
        (object) => {
            console.log("Objekt geladen.");
            object.scale.set(1, 1, 1);
            object.position.set(0, 0, -5);
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
