import { Group } from 'three';

import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';

export function getAvailableAnimationListByModel(model: Group): AnimationItem[] {
  const { animations } = model;
  return animations.map(animation => ({ name: animation.name, uuid: animation.uuid, duration: animation.duration }));
}
