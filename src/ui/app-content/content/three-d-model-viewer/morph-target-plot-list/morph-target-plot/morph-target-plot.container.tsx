import React from 'react';

import { morphTargetPointsByName } from 'src/store/slices/app/app.selectors';
import { updateMorphTargetData } from 'src/store/slices/app/app.slice';
import { useViewerGeometry } from 'src/ui/app-content/content/three-d-model-viewer/contexts/viewer-geometry/use-viewer-geometry';
import MorphTargetPlot from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot/morph-target-plot';
import { TimeValue } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

type Porps = {
  plotName: string;
};

const MorphTargetPlotContainer: React.FC<Porps> = ({ plotName }) => {
  const points = useAppSelector(state => morphTargetPointsByName(state, plotName));
  const { offsetWidth } = useViewerGeometry();
  const dispatch = useAppDispatch();

  const updateMorphTarget = (newPoints: TimeValue[]) => {
    dispatch(updateMorphTargetData({ shapeName: plotName, newPoints }));
  };

  return (
    <MorphTargetPlot plotName={plotName} points={points} updatePoints={updateMorphTarget} plotWidth={offsetWidth} />
  );
};

export default MorphTargetPlotContainer;
