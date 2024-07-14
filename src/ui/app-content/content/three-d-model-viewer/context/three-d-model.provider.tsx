import React, { ReactNode, useState } from 'react';

import { Nullable } from 'src/common/types/common';
import { ThreeDModelContext } from 'src/ui/app-content/content/three-d-model-viewer/context/three-d-model.context';
import { ThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

type Props = {
  children: ReactNode;
};

const ThreeDModelProvider: React.FC<Props> = ({ children }) => {
  const [threeDModel, setThreeDModel] = useState<Nullable<ThreeDModel>>(null);
  return <ThreeDModelContext.Provider value={{ threeDModel, setThreeDModel }}>{children}</ThreeDModelContext.Provider>;
};

export default ThreeDModelProvider;
