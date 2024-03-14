import * as THREE from "three";
import { sceneStore } from "../data/threeStore";
import { loadFbxModel } from "./fbxLoader";
import { loadGltfModel } from "./loader/gltfLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer: THREE.WebGLRenderer;

camera.position.z = 5;

const createLine = (): THREE.Line => {
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];

    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
    return line;
}

const createCube = (): THREE.Mesh => {
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
}

const animate = (cube: THREE.Mesh) => {
    requestAnimationFrame(() => animate(cube));
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

const resize = () => {
    renderer!.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

const createLight = () => {
    const light = new THREE.PointLight(0xffffff, 50);
    light.position.set(0.8, 1.4, 1.0);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);
}

export const createScene = (el: HTMLCanvasElement) => {
    sceneStore.set(scene);
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el })
    //createLight();
    const cube = createCube();
    //const line = createLine();
    animate(cube);

    //loadFbxModel("./haus.fbx", scene);
    //loadGltfModel("src\\lib\\assets\\haus.glb", scene)
    renderer!.render(scene, camera);
    resize();
}

window.addEventListener("resize", resize);