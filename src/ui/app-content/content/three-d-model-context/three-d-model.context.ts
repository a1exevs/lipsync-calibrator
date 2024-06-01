import { createContext } from 'react';
import { Group } from 'three';

import { Nullable } from 'src/common/types/common';

export const ThreeDModelContext = createContext<{
  threeDModel: Nullable<Group>;
  setThreeDModel: (_: Nullable<Group>) => void;
}>({
  threeDModel: null,
  setThreeDModel: () => {},
});
