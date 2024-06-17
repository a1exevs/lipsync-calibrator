import { AnimationMixer, DirectionalLight, Light, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { LightShadow } from 'three/src/lights/LightShadow';

import { Nullable } from 'src/common/types/common';
import { ThreeDModelFileLoaderFactory } from 'src/ui/app-content/content/file-uploader/helpers/file-loaders.factory';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
  ThreeDModelViewerDriver,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import {
  cameraAspect,
  cameraFar,
  cameraFOV,
  cameraLookAtPosition,
  cameraNear,
  cameraPosition,
  lightColor,
  lightIntensity,
  lightPosition,
  modelPosition,
  rotateXAngle,
  rotateYAngle,
  rotateZAngle,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/gltf-driver/gltf-driver.consts';
import {
  getSelectedAnimation,
  stopAllAnimationsForMixer,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/gltf-driver/gltf-driver.helpers';
import { windowMinWidth } from 'src/ui/shared/styles/consts';

export const gltfDriver: ThreeDModelViewerDriver<GLTF> = {
  getLoader: () => ThreeDModelFileLoaderFactory.create(SupportedThreeDModelExtension.FBX),
  getConfiguredCamera: (): PerspectiveCamera => {
    const camera = new PerspectiveCamera(cameraFOV, cameraAspect, cameraNear, cameraFar);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.lookAt(new Vector3(cameraLookAtPosition.x, cameraLookAtPosition.y, cameraLookAtPosition.z));
    return camera;
  },
  getLight: () => {
    const light = new DirectionalLight(lightColor, lightIntensity);
    light.position.set(lightPosition.x, lightPosition.y, lightPosition.z).normalize();
    return light;
  },
  setModelToScene: (object: GLTF, scene: Scene) => {
    object.scene.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
    object.scene.rotateX(rotateXAngle);
    object.scene.rotateY(rotateYAngle);
    object.scene.rotateZ(rotateZAngle);
    scene.add(object.scene);
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
  setupAndPlayAnimation: (object: GLTF, selectedAnimationUUID: Nullable<string>): AnimationMixer => {
    const mixer = new AnimationMixer(object.scene);
    const selected = getSelectedAnimation(object, selectedAnimationUUID);
    const action = mixer.clipAction(selected);
    action.play();
    return mixer;
  },
  rerunAnimation: (object: ThreeDModel, selectedAnimationUUID: Nullable<string>, mixer: AnimationMixer): void => {
    stopAllAnimationsForMixer(mixer);
    const selected = getSelectedAnimation(object, selectedAnimationUUID);
    const action = mixer.clipAction(selected);
    action.play();
  },
  stopAllAnimations: (mixer: AnimationMixer): void => {
    stopAllAnimationsForMixer(mixer);
  },
};
