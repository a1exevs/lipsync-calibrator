import React, { ReactNode, useState } from 'react';

import { Nullable } from 'src/common/types/common';
import { ViewerGeometryContext } from 'src/ui/app-content/content/three-d-model-viewer/contexts/viewer-geometry/viewer-geometry.context';

type Props = {
  children: ReactNode;
};

const ViewerGeometryProvider: React.FC<Props> = ({ children }) => {
  const [offsetWidth, setOffsetWidth] = useState<Nullable<number>>(null);
  return (
    <ViewerGeometryContext.Provider value={{ offsetWidth, setOffsetWidth }}>{children}</ViewerGeometryContext.Provider>
  );
};

export default ViewerGeometryProvider;
