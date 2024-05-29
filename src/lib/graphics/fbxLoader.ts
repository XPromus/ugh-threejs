import { houseChildrenNameStore } from "$lib/data/houseStore";
import { get } from "svelte/store";
import type { Scene } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export const loadFbxHouse = (scene: Scene) => {
    const fbxLoader = new FBXLoader();
    console.log("Laden")
    fbxLoader.load(
        "src\\lib\\assets\\01_Hutberg-Haus_JF_AC27_02.05.2024.fbx",
        (object) => {
            console.log("Objekt geladen.");
            object.scale.set(1, 1, 1);
            object.position.set(0, 0, -5);

            for (let i = 0; i < object.children.length; i++) {
                const childName: string = object.children[i].name;
                const newArray: string[] = get(houseChildrenNameStore);
                newArray.push(childName);
                houseChildrenNameStore.set(newArray);
            }

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
