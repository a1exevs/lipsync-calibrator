import { useFrame } from '@react-three/fiber';
import { useConfirm } from 'material-ui-confirm';
import React, { useEffect, useRef } from 'react';
import { AnimationMixer, Group, Object3D } from 'three';

import { isEmpty, isNull } from 'src/common/helpers/guards';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
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
import { ThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

const ThreeDModelScene: React.FC<{
  animationUUID: Nullable<string>;
  scene: Group;
  model: ThreeDModel;
  morphTargets: Nullable<Record<string, Shape>>;
  updateAnimationList: (animationToUpdate: AnimationItem, index: number) => void;
}> = ({ animationUUID, model, morphTargets, updateAnimationList, scene }) => {
  const meshRefs = useRef<Object3D[]>([]);
  const mixerRef = useRef<Nullable<AnimationMixer>>(null);
  const confirm = useConfirm();

  useEffect(() => {
    meshRefs.current = getMeshObjects(scene);
    if (!isNull(morphTargets) && !isEmpty(meshRefs.current)) {
      const morphTracks = getKeyFrameTracks(morphTargets, meshRefs.current);
      if (!isEmpty(morphTracks)) {
        const { clip, clipIndex, clipName } = createOrUpdateCustomAnimationClip(model, morphTracks);
        updateAnimationList(getAnimationItem(clip), clipIndex);
        if (clipIndex === -1) {
          confirm({
            title: currentLang.labels.NOTIFICATION,
            description: interpolateStrings(currentLang.messages.NEW_ANIMATION_ADDING_FOR_PLOTS, clipName),
            hideCancelButton: true,
          });
        }
      }
    }
    mixerRef.current = new AnimationMixer(scene);
  }, [model, morphTargets]);

  useEffect(() => {
    mixerRef.current = runAnimation(model, animationUUID, scene);
  }, [model, animationUUID]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return <primitive object={scene} />;
};

export default ThreeDModelScene;
