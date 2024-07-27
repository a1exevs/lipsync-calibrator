import { createContext } from 'react';

import { Nullable } from 'src/common/types/common';

export const ViewerGeometryContext = createContext<{
  offsetWidth: Nullable<number>;
  setOffsetWidth: (width: Nullable<number>) => void;
}>({
  offsetWidth: null,
  setOffsetWidth: () => {},
});
