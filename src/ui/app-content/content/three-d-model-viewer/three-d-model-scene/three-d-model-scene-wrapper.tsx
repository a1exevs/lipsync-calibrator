import React from 'react';

import { Nullable } from 'src/common/types/common';
import { AnimationItem } from 'src/store/slices/app/app.types';
import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import ThreeDModelScene from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/three-d-model-scene';
import { getSceneByModel } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/three-d-model-scene.helpers';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
} from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

type Props = {
  threeDModel: Nullable<ThreeDModel>;
  modelExtension: Nullable<SupportedThreeDModelExtension>;
  animationUUIDs: string[];
  morphTargets: Nullable<Record<string, Shape>>;
  updateAnimationList: (animationToUpdate: AnimationItem, index: number) => void;
};

const ThreeDModelSceneWrapper: React.FC<Props> = ({
  threeDModel,
  modelExtension,
  morphTargets,
  animationUUIDs,
  updateAnimationList,
}) => {
  return (
    <>
      {threeDModel && (
        <ThreeDModelScene
          animationUUIDs={animationUUIDs}
          model={threeDModel}
          scene={getSceneByModel(threeDModel, modelExtension)}
          morphTargets={morphTargets}
          updateAnimationList={updateAnimationList}
        />
      )}
    </>
  );
};

export default ThreeDModelSceneWrapper;
