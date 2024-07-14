import React from 'react';

import { selectedAnimationName, threeDModelExtension } from 'src/store/slices/app/app.selectors';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/context/use-three-d-model';
import ThreeDModelScene from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/three-d-model-scene';
import { useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const ThreeDModelSceneContainer: React.FC = () => {
  const { threeDModel } = useThreeDModel();
  const modelExtension = useAppSelector(threeDModelExtension);
  const animationName = useAppSelector(selectedAnimationName);

  return <ThreeDModelScene threeDModel={threeDModel} modelExtension={modelExtension} animationName={animationName} />;
};

export default ThreeDModelSceneContainer;
