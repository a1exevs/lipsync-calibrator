import { useContext } from 'react';

import { ViewerGeometryContext } from 'src/ui/app-content/content/three-d-model-viewer/contexts/viewer-geometry/viewer-geometry.context';

export const useViewerGeometry = () => useContext(ViewerGeometryContext);
