import WebGL from "three/addons/capabilities/WebGL.js";

export const checkWebGlCompatibility = (): boolean => {
    return WebGL.isWebGLAvailable();
}