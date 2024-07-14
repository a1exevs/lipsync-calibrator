import { useContext } from 'react';

import { ThreeDModelContext } from 'src/ui/app-content/content/three-d-model-viewer/context/three-d-model.context';

export const useThreeDModel = () => useContext(ThreeDModelContext);
