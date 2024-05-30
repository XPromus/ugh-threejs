import { houseChildrenNameStore } from "$lib/data/houseStore";
import { get } from "svelte/store";
import type { Scene } from "three";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";

export const loadGenericFbxByPath = (path: string, scene: Scene) => {
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
        path,
        (object) => {
            object.scale.set(1, 1, 1);
            object.position.set(0, 0, -5);
            scene.add(object);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
            console.log(error);
        }
    )
}

export const loadFbxHouse = (path: string, scene: Scene) => {
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
        path,
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
