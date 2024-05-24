import { Group, Light, Scene, WebGLRenderer } from 'three';
import { Camera } from 'three/src/cameras/Camera';
import { LightShadow } from 'three/src/lights/LightShadow';

export enum SupportedFileExtension {
  // TODO Support other extensions (gltf)
  FBX = 'fbx',
}

export type ThreeDModelViewerDriver = {
  getConfiguredCamera: () => Camera;
  getLight: () => Light<LightShadow>;
  setModelToScene: (_: Group, __: Scene) => void;
  getScene: (_: Light<LightShadow>) => Scene;
  getWebGlRenderer: () => WebGLRenderer;
  getAnimationData: (_: Group, __: Scene) => string[];
};
