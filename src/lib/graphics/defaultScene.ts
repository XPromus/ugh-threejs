import * as THREE from "three";
import { sceneStore } from "$lib/data/threeStore";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import { VRButton } from "three/addons/webxr/VRButton.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer: THREE.WebGLRenderer;

camera.position.set(3.8, 8.4, 19.9);
camera.lookAt(new THREE.Vector3(2, 13, -4));

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

let controls: OrbitControls;

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

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

    renderer.xr.enabled = true;
    document.body.appendChild(VRButton.createButton(renderer!));

    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });

    animate();
    resize();
}


window.addEventListener("resize", resize);