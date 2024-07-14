import React from 'react';
import { Group } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { Nullable } from 'src/common/types/common';
import FBXModelScene from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/fbx-model-scene';
import GLTFModelScene from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/gltf-model-scene';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
} from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

type Props = {
  threeDModel: Nullable<ThreeDModel>;
  modelExtension: Nullable<SupportedThreeDModelExtension>;
  animationName: Nullable<string>;
};

const ThreeDModelScene: React.FC<Props> = ({ threeDModel, modelExtension, animationName }) => {
  return (
    <>
      {threeDModel && (
        <>
          {modelExtension === 'gltf' && <GLTFModelScene animationName={animationName} model={threeDModel as GLTF} />}
          {modelExtension === 'fbx' && <FBXModelScene animationName={animationName} model={threeDModel as Group} />}
        </>
      )}
    </>
  );
};

export default ThreeDModelScene;
