import React, { ReactNode, useState } from 'react';
import { Group } from 'three';

import { Nullable } from 'src/common/types/common';
import { ThreeDModelContext } from 'src/ui/app-content/content/three-d-model-context/three-d-model.context';

type Props = {
  children: ReactNode;
};

const ThreeDModelProvider: React.FC<Props> = ({ children }) => {
  const [threeDModel, setThreeDModel] = useState<Nullable<Group>>(null);
  return <ThreeDModelContext.Provider value={{ threeDModel, setThreeDModel }}>{children}</ThreeDModelContext.Provider>;
};

export default ThreeDModelProvider;
