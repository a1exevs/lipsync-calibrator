import { AnimationClip, AnimationMixer, Group, Mesh, NumberKeyframeTrack, Object3D } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { isEmpty, isUndefined } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
} from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

export function runAnimation(model: ThreeDModel, animationUUID: Nullable<string>, scene: Group): AnimationMixer {
  const mixer = new AnimationMixer(scene);
  const selectedAnimation = model.animations.find(clip => animationUUID === clip.uuid);
  if (!isUndefined(selectedAnimation)) {
    const action = mixer.clipAction(selectedAnimation);
    action.play();
  }
  return mixer;
}

export function getMeshObjects(scene: Nullable<Group>): Mesh[] {
  const meshObjects: Mesh[] = [];
  scene?.traverse?.(object => {
    const mesh = object as Mesh;
    if (mesh.isMesh && mesh.morphTargetInfluences) {
      meshObjects.push(mesh);
    }
  });
  return meshObjects;
}

export function modelHasMeshObjects(
  model: Nullable<ThreeDModel>,
  extension: Nullable<SupportedThreeDModelExtension>,
): boolean {
  if (extension === 'gltf') {
    return !isEmpty(getMeshObjects((model as GLTF).scene));
  }
  return !isEmpty(getMeshObjects(model as Group));
}

export function getSceneByModel(model: ThreeDModel, extension: Nullable<SupportedThreeDModelExtension>): Group {
  if (extension === 'gltf') {
    return (model as GLTF).scene;
  }
  return model as Group;
}

export function getKeyFrameTracks(
  morphTargets: Nullable<Record<string, Shape>>,
  meshObjects: Object3D[],
): NumberKeyframeTrack[] {
  const times: number[] = [];
  const shapeNames = Object.keys(morphTargets ?? {});
  const pointCount = morphTargets?.[shapeNames[0]]?.data.length ?? 0;
  const values: number[] = [];
  for (let i = 0; i < pointCount; i++) {
    shapeNames.forEach((shapeName, index) => {
      if (index === 0) {
        times.push(morphTargets?.[shapeName]?.data[i].time ?? 0);
      }
      values.push(morphTargets?.[shapeName].data[i].value ?? 0);
    });
  }

  return meshObjects.flatMap((mesh, meshIndex) => {
    return new NumberKeyframeTrack(`${mesh.name}.morphTargetInfluences[${meshIndex}]`, times, values);
  });
}

/**
 * Returns clipIndex = -1 if clip is created before animation
 * @param model
 * @param morphTracks
 */
export function createOrUpdateCustomAnimationClip(
  model: ThreeDModel,
  morphTracks: NumberKeyframeTrack[],
): { clip: AnimationClip; clipIndex: number; clipName: string } {
  const clipName = `Shape animation (${currentLang.labels.APP_NAME})`;
  const clip = new AnimationClip(clipName, -1, morphTracks);
  const clipIndex = model.animations.findIndex(animation => animation.name === clipName);
  if (clipIndex === -1) {
    model.animations.push(clip);
  } else {
    model.animations[clipIndex] = clip;
  }
  return { clip, clipIndex, clipName };
}
