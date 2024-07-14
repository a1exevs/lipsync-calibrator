import { createContext } from 'react';

import { Nullable } from 'src/common/types/common';
import { ThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

export const ThreeDModelContext = createContext<{
  threeDModel: Nullable<ThreeDModel>;
  setThreeDModel: (_: Nullable<ThreeDModel>) => void;
}>({
  threeDModel: null,
  setThreeDModel: () => {},
});
