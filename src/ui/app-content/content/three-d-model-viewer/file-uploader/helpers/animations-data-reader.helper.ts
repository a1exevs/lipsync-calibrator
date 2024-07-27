import { AnimationClip } from 'three';

import { AnimationItem } from 'src/store/slices/app/app.types';
import { ThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

export function getAnimationItem(animation: AnimationClip): AnimationItem {
  return { name: animation.name, uuid: animation.uuid, duration: animation.duration };
}

export function getAvailableAnimationListByModel(model: ThreeDModel): AnimationItem[] {
  const { animations } = model;
  return animations.map(getAnimationItem);
}
