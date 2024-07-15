import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { AnimationMixer, Object3D } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { isEmpty, isNull } from 'src/common/helpers/guards';
import { Nullable } from 'src/common/types/common';
import { AnimationItem } from 'src/store/slices/app/app.types';
import { getAnimationItem } from 'src/ui/app-content/content/file-uploader/helpers/animations-data-reader.helper';
import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import {
  createOrUpdateCustomAnimationClip,
  getKeyFrameTracks,
  getMeshObjects,
  runAnimation,
} from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/three-d-model-scene.helpers';

const GLTFModelScene: React.FC<{
  animationUUID: Nullable<string>;
  model: GLTF;
  morphTargets: Nullable<Record<string, Shape>>;
  updateAnimationList: (animationToUpdate: AnimationItem, index: number) => void;
}> = ({ animationUUID, model, morphTargets, updateAnimationList }) => {
  const { scene } = model;
  const meshRefs = useRef<Object3D[]>([]);
  const mixerRef = useRef<Nullable<AnimationMixer>>(null);

  useEffect(() => {
    meshRefs.current = getMeshObjects(model.scene);
    if (!isNull(morphTargets) && !isEmpty(meshRefs.current)) {
      const morphTracks = getKeyFrameTracks(morphTargets, meshRefs.current);
      if (!isEmpty(morphTracks)) {
        const { clip, clipIndex } = createOrUpdateCustomAnimationClip(model, morphTracks);
        updateAnimationList(getAnimationItem(clip), clipIndex);
      }
    }
    mixerRef.current = new AnimationMixer(model.scene);
  }, [model, morphTargets]);

  useEffect(() => {
    mixerRef.current = runAnimation(model, animationUUID, model.scene);
  }, [model, animationUUID]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return <primitive object={scene} />;
};

export default GLTFModelScene;
