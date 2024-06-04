import { AnimationMixer, Group, Light, Loader, Scene, WebGLRenderer } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Camera } from 'three/src/cameras/Camera';
import { LightShadow } from 'three/src/lights/LightShadow';

import { Nullable } from 'src/common/types/common';

export enum SupportedThreeDModelExtension {
  FBX = 'fbx',
  GLTF = 'gltf',
}

export type ThreeDModel = Group | GLTF;

export type ThreeDModelViewerDriver<T = ThreeDModel> = {
  getLoader: () => Loader<T>;
  getConfiguredCamera: () => Camera;
  getLight: () => Light<LightShadow>;
  setModelToScene: (_: T, __: Scene) => void;
  getScene: (_: Light<LightShadow>) => Scene;
  getWebGlRenderer: () => WebGLRenderer;
  setupAndPlayAnimation: (_: T, __: Nullable<string>) => AnimationMixer;
  rerunAnimation: (_: T, __: Nullable<string>, ___: AnimationMixer) => void;
  stopAllAnimations: (_: AnimationMixer) => void;
};
