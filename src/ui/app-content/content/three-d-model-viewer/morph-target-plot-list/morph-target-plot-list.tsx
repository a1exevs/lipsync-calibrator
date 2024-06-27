import React from 'react';

import MorphTargetPlotContainer from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot/morph-target-plot.container';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot-list.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  morphTargets: string[];
};

const MorphTargetPlotList: React.FC<Props> = ({ morphTargets }) => {
  const classes = useClasses();
  return (
    <MUIBox className={classes.morphTargetPlotList}>
      {morphTargets.map((shapeName, index) => (
        <MUIBox key={shapeName + index}>
          <MorphTargetPlotContainer plotName={shapeName} />
        </MUIBox>
      ))}
    </MUIBox>
  );
};

export default MorphTargetPlotList;
