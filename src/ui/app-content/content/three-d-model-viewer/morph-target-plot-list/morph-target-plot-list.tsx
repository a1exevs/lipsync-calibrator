import { Typography } from '@mui/material';
import React from 'react';

import { isNull } from 'src/common/helpers/guards';
import { Nullable } from 'src/common/types/common';
import { MorphTargetData } from 'src/store/slices/app/app.types';
import MorphTargetPlot from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot/morph-target-plot';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot-list.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  morphTargetData: Nullable<MorphTargetData>;
};

const MorphTargetPlotList: React.FC<Props> = ({ morphTargetData }) => {
  const classes = useClasses();

  if (isNull(morphTargetData)) {
    return <></>;
  }

  return (
    <MUIBox className={classes.morphTargetPlotList}>
      {morphTargetData.data.map((shape, index) => (
        <MUIBox key={shape.shapeName + index}>
          <Typography variant="h6" align="center">
            {shape.shapeName}
          </Typography>
          <MorphTargetPlot points={shape.data} />
        </MUIBox>
      ))}
    </MUIBox>
  );
};

export default MorphTargetPlotList;
