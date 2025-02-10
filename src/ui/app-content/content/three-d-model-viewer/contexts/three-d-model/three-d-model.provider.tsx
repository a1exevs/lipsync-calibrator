import React, { ReactNode, useState } from 'react';

import { Nullable } from 'src/common/types/common';
import { ThreeDModelContext } from 'src/ui/app-content/content/three-d-model-viewer/contexts/three-d-model/three-d-model.context';
import { modelHasMeshObjects } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/three-d-model-scene.helpers';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
} from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

type Props = {
  children: ReactNode;
};

const ThreeDModelProvider: React.FC<Props> = ({ children }) => {
  const [threeDModel, setThreeDModel] = useState<Nullable<ThreeDModel>>(null);
  const [threeDModelExtension, setThreeDModelExtension] = useState<Nullable<SupportedThreeDModelExtension>>(null);
  const hasMeshObject = modelHasMeshObjects(threeDModel, threeDModelExtension);
  return (
    <ThreeDModelContext.Provider
      value={{ hasMeshObject, threeDModel, setThreeDModel, threeDModelExtension, setThreeDModelExtension }}
    >
      {children}
    </ThreeDModelContext.Provider>
  );
};

export default ThreeDModelProvider;
