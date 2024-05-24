import { DirectionalLight, Group, Light, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { LightShadow } from 'three/src/lights/LightShadow';

import { ThreeDModelViewerDriver } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import {
  cameraFar,
  cameraFOV,
  cameraLookAtPosition,
  cameraNear,
  cameraPosition,
  camwraAspect,
  lightColor,
  lightIntensity,
  lightPosition,
  modelPosition,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/fbx-driver/fbx-driver.consts';
import { windowMinWidth } from 'src/ui/common/styles/consts';

export const fbxDriver: ThreeDModelViewerDriver = {
  getLoader: () => new FBXLoader(),
  getConfiguredCamera: (): PerspectiveCamera => {
    const camera = new PerspectiveCamera(cameraFOV, camwraAspect, cameraNear, cameraFar);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.lookAt(new Vector3(cameraLookAtPosition.x, cameraLookAtPosition.y, cameraLookAtPosition.z));
    return camera;
  },
  getLight: () => {
    const light = new DirectionalLight(lightColor, lightIntensity);
    light.position.set(lightPosition.x, lightPosition.y, lightPosition.z).normalize();
    return light;
  },
  setModelToScene: (object: Group, scene: Scene) => {
    object.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
    object.rotateZ(-(Math.PI / 6));
    object.rotateX(Math.PI);
    scene.add(object);
  },
  getScene: (light: Light<LightShadow>) => {
    const scene = new Scene();
    scene.add(light);
    return scene;
  },
  getWebGlRenderer: () => {
    const renderer = new WebGLRenderer({ antialias: true });
    const size = windowMinWidth;
    renderer.setSize(size, size);
    return renderer;
  },
  getAnimationData: (_: Group, __: Scene) => {
    // TODO use in FileUploader for getting of available animation list data
    // TODO implement
    return [];
  },
};
