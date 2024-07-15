import React from 'react';
import { Group } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { Nullable } from 'src/common/types/common';
import { AnimationItem } from 'src/store/slices/app/app.types';
import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import FBXModelScene from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/fbx-model-scene';
import GLTFModelScene from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/gltf-model-scene';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
} from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

type Props = {
  threeDModel: Nullable<ThreeDModel>;
  modelExtension: Nullable<SupportedThreeDModelExtension>;
  animationUUID: Nullable<string>;
  morphTargets: Nullable<Record<string, Shape>>;
  updateAnimationList: (animationToUpdate: AnimationItem, index: number) => void;
};

const ThreeDModelScene: React.FC<Props> = ({
  threeDModel,
  modelExtension,
  morphTargets,
  animationUUID,
  updateAnimationList,
}) => {
  return (
    <>
      {threeDModel && (
        <>
          {modelExtension === 'gltf' && (
            <GLTFModelScene
              animationUUID={animationUUID}
              model={threeDModel as GLTF}
              morphTargets={morphTargets}
              updateAnimationList={updateAnimationList}
            />
          )}
          {modelExtension === 'fbx' && (
            <FBXModelScene
              animationUUID={animationUUID}
              model={threeDModel as Group}
              morphTargets={morphTargets}
              updateAnimationList={updateAnimationList}
            />
          )}
        </>
      )}
    </>
  );
};

export default ThreeDModelScene;
