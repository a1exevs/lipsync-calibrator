import React from 'react';

import { morphTargetNames } from 'src/store/slices/app/app.selectors';
import MorphTargetPlotList from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot-list';
import { useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const MorphTargetPlotListContainer: React.FC = () => {
  const morphTargets = useAppSelector(morphTargetNames);
  return <MorphTargetPlotList morphTargets={morphTargets} />;
};

export default MorphTargetPlotListContainer;
