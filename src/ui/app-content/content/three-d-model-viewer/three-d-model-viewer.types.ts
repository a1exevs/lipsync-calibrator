import { Group } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export enum SupportedThreeDModelExtension {
  FBX = 'fbx',
  GLTF = 'gltf',
}

export type ThreeDModel = Group | GLTF;

export type ThreeDModelLoader = FBXLoader | GLTFLoader;
