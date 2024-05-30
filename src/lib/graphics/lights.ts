import type { Scene } from "three";
import * as THREE from "three";

export const createDirectionLight = (scene: Scene) => {
    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);
    
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    
    const dirLightCameraConst = 50;
    dirLight.shadow.camera.left = dirLightCameraConst;
    dirLight.shadow.camera.right = dirLightCameraConst;
    dirLight.shadow.camera.top = dirLightCameraConst;
    dirLight.shadow.camera.bottom = dirLightCameraConst;
    
    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = -0.0001;
    
    const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
    scene.add(dirLightHelper);
}

export const createHemiLight = (scene: Scene) => {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    scene.add(hemiLightHelper);
}