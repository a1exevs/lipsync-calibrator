import { AnimationClip, AnimationMixer, Group } from 'three';

import { isEmpty, isUndefined } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';

export function getSelectedAnimation(object: Group, selectedAnimationUUID: Nullable<string>): AnimationClip {
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
