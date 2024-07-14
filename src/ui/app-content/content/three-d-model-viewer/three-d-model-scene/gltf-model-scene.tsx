import { useAnimations } from '@react-three/drei';
import React, { useEffect } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { isNull } from 'src/common/helpers/guards';
import { Nullable } from 'src/common/types/common';

const GLTFModelScene: React.FC<{
  animationName: Nullable<string>;
  model: GLTF;
}> = ({ animationName, model }) => {
  const { scene, animations } = model;
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (!isNull(animationName)) {
      actions?.[animationName]?.play();
    }
  }, [actions, animationName]);

  return <primitive object={scene} />;
};

export default GLTFModelScene;
