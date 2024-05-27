import * as THREE from "three";
import { sceneStore } from "$lib/data/threeStore";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { cameraNear } from "three/examples/jsm/nodes/Nodes.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer: THREE.WebGLRenderer;

camera.position.set(3.8, 8.4, 19.9);
camera.lookAt(new THREE.Vector3(2, 13, -4));

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

let controls: OrbitControls;

const light = new THREE.AmbientLight(0xff0000, 1);
scene.add(light);

const basePlate = new THREE.Mesh(
    new THREE.CylinderGeometry(10, 10, 1, 50, 50),
    new THREE.MeshBasicMaterial({ color: 0x258700 }),
);
basePlate.position.y -= 0.5;
scene.add(basePlate);

const earthPlate = new THREE.Mesh(
    new THREE.CylinderGeometry(10, 10, 5, 50, 50),
    new THREE.MeshBasicMaterial({ color: 0x644200 }),
);
earthPlate.position.y -= 3.5;
scene.add(earthPlate);

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer!.render(scene, camera);
}

const resize = () => {
    renderer!.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

export const createScene = (el: HTMLCanvasElement) => {
    sceneStore.set(scene);
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
    controls = new OrbitControls(camera, renderer!.domElement);

    animate();
    resize();
}

window.addEventListener("resize", resize);