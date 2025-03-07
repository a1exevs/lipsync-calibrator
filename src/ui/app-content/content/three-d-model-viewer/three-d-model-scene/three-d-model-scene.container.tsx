import React from 'react';

import { morphTargetDataMap, selectedAnimationUUIDs, threeDModelExtension } from 'src/store/slices/app/app.selectors';
import { updateAnimations } from 'src/store/slices/app/app.thunks';
import { AnimationItem } from 'src/store/slices/app/app.types';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/contexts/three-d-model/use-three-d-model';
import ThreeDModelSceneWrapper from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/three-d-model-scene-wrapper';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const ThreeDModelSceneContainer: React.FC = () => {
  const { threeDModel } = useThreeDModel();
  const modelExtension = useAppSelector(threeDModelExtension);
  const animationUUIDs = useAppSelector(selectedAnimationUUIDs);
  const morphTargets = useAppSelector(morphTargetDataMap);

  const dispatch = useAppDispatch();
  const updateAnimationList = (animationToUpdate: AnimationItem, index: number): void => {
    dispatch(updateAnimations({ animationToUpdate, index }));
  };

  return (
    <ThreeDModelSceneWrapper
      threeDModel={threeDModel}
      modelExtension={modelExtension}
      animationUUIDs={animationUUIDs}
      morphTargets={morphTargets}
      updateAnimationList={updateAnimationList}
    />
  );
};

export default ThreeDModelSceneContainer;
