import {
  AnimationMixer,
  DirectionalLight,
  Group,
  Light,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { LightShadow } from 'three/src/lights/LightShadow';

import { Nullable } from 'src/common/types/common';
import { ThreeDModelFileLoaderFactory } from 'src/ui/app-content/content/file-uploader/helpers/file-loaders.factory';
import {
  SupportedThreeDModelExtension,
  ThreeDModelViewerDriver,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
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
import {
  getSelectedAnimation,
  stopAllAnimationsForMixer,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/fbx-driver/fbx-driver.helpers';
import { windowMinWidth } from 'src/ui/common/styles/consts';

export const fbxDriver: ThreeDModelViewerDriver = {
  getLoader: () => ThreeDModelFileLoaderFactory.create(SupportedThreeDModelExtension.FBX),
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
    object.rotateZ(Math.PI / 12);
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
  setupAndPlayAnimation: (object: Group, selectedAnimationUUID: Nullable<string>): AnimationMixer => {
    const mixer = new AnimationMixer(object);
    const selected = getSelectedAnimation(object, selectedAnimationUUID);
    const action = mixer.clipAction(selected);
    action.play();
    return mixer;
  },
  rerunAnimation: (object: Group, selectedAnimationUUID: Nullable<string>, mixer: AnimationMixer): void => {
    stopAllAnimationsForMixer(mixer);
    const selected = getSelectedAnimation(object, selectedAnimationUUID);
    const action = mixer.clipAction(selected);
    action.play();
  },
  stopAllAnimations: (mixer: AnimationMixer): void => {
    stopAllAnimationsForMixer(mixer);
  },
};
