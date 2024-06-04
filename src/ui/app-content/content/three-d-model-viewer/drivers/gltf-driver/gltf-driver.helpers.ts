import { AnimationClip, AnimationMixer } from 'three';

import { isEmpty, isUndefined } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { ThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

export function getSelectedAnimation(object: ThreeDModel, selectedAnimationUUID: Nullable<string>): AnimationClip {
  if (isEmpty(object.animations)) {
    throw new Error(currentLang.errors.NO_AVAILABLE_ANIMATIONS);
  }
  const selected = object.animations.find(animation => animation.uuid === selectedAnimationUUID);
  if (isUndefined(selected)) {
    throw new Error(currentLang.errors.NO_SELECTED_ANIMATION);
  }
  return selected;
}

export function stopAllAnimationsForMixer(mixer: AnimationMixer): void {
  mixer.stopAllAction();
}
