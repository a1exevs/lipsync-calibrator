import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { ThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

export function getAvailableAnimationListByModel(model: ThreeDModel): AnimationItem[] {
  const { animations } = model;
  return animations.map(animation => ({ name: animation.name, uuid: animation.uuid, duration: animation.duration }));
}
