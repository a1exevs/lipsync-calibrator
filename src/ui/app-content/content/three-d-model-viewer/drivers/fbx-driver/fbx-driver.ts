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
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { LightShadow } from 'three/src/lights/LightShadow';

import { isEmpty, isUndefined } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
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
    if (isEmpty(object.animations)) {
      throw new Error(currentLang.errors.NO_AVAILABLE_ANIMATIONS);
    }
    const selected = object.animations.find(animation => animation.uuid === selectedAnimationUUID);
    if (isUndefined(selected)) {
      throw new Error(currentLang.errors.NO_SELECTED_ANIMATION);
    }
    const action = mixer.clipAction(selected);
    action.play();
    return mixer;
  },
};
