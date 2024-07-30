import Typography from '@material-ui/core/Typography';
import cn from 'classnames';
import React from 'react';

import { isEmpty } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import MorphTargetPlotContainer from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot/morph-target-plot.container';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot-list.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  morphTargets: string[];
};

const MorphTargetPlotList: React.FC<Props> = ({ morphTargets }) => {
  const classes = useClasses();
  return (
    <MUIBox
      className={cn(
        classes.morphTargetPlotList,
        {
          [classes.morphTargetPlotList_withoutOverflow]: isEmpty(morphTargets),
        },
        {
          [classes.morphTargetPlotList_withCenterAlignment]: isEmpty(morphTargets),
        },
      )}
    >
      {isEmpty(morphTargets) && (
        <Typography variant="body1" color="inherit" align="center">
          {currentLang.messages.PLOT_PANEL_NO_DATA}
        </Typography>
      )}
      {morphTargets.map((shapeName, index) => (
        <MUIBox key={shapeName + index}>
          <MorphTargetPlotContainer plotName={shapeName} />
        </MUIBox>
      ))}
    </MUIBox>
  );
};

export default MorphTargetPlotList;
