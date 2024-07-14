import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { AnimationMixer, Group } from 'three';

import { isUndefined } from 'src/common/helpers/guards';
import { Nullable } from 'src/common/types/common';

const FBXModelScene: React.FC<{
  animationName: Nullable<string>;
  model: Group;
}> = ({ animationName, model }) => {
  const mixerRef = useRef<Nullable<AnimationMixer>>(null);

  useEffect(() => {
    const mixer = new AnimationMixer(model);
    const selectedAnimation = model.animations.find(clip => animationName === clip.name);
    if (!isUndefined(selectedAnimation)) {
      const action = mixer.clipAction(selectedAnimation);
      action.play();
    }
    mixerRef.current = mixer;
  }, [model, animationName]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
  });

  return model ? <primitive object={model} /> : null;
};

export default FBXModelScene;
