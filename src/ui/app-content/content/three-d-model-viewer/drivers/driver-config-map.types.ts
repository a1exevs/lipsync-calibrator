import { AnimationMixer, Group, Light, Loader, Scene, WebGLRenderer } from 'three';
import { Camera } from 'three/src/cameras/Camera';
import { LightShadow } from 'three/src/lights/LightShadow';

import { Nullable } from 'src/common/types/common';

export enum SupportedThreeDModelExtension {
  // TODO Support other extensions (gltf)
  FBX = 'fbx',
}

export type ThreeDModelViewerDriver = {
  getLoader: () => Loader<Group>;
  getConfiguredCamera: () => Camera;
  getLight: () => Light<LightShadow>;
  setModelToScene: (_: Group, __: Scene) => void;
  getScene: (_: Light<LightShadow>) => Scene;
  getWebGlRenderer: () => WebGLRenderer;
  setupAndPlayAnimation: (_: Group, __: Nullable<string>) => AnimationMixer;
  rerunAnimation: (_: Group, __: Nullable<string>, ___: AnimationMixer) => void;
  stopAllAnimations: (_: AnimationMixer) => void;
};
