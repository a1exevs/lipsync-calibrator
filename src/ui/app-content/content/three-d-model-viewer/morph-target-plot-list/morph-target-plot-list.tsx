import Typography from '@material-ui/core/Typography';
import { useTheme } from '@mui/material/styles';
import cn from 'classnames';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { isEmpty } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import MorphTargetPlotContainer from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot/morph-target-plot.container';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot-list.styles';
import { jsonStructureExample } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.consts';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  morphTargets: string[];
};

const MorphTargetPlotList: React.FC<Props> = ({ morphTargets }) => {
  const theme = useTheme();
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
        <MUIBox sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="body1" color="inherit" align="center">
            {currentLang.messages.PLOT_PANEL_NO_DATA}
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            {`${currentLang.messages.PLOT_DATA_EXAMPLE}:`}
          </Typography>
          <SyntaxHighlighter
            customStyle={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.disabled }}
            language="json"
          >
            {JSON.stringify(jsonStructureExample, null, 2)}
          </SyntaxHighlighter>
        </MUIBox>
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
