import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  morphTargetPlotList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
    margin: 2 * MUISpacePx,
    height: 40 * MUISpacePx,
    width: '100%',
    overflow: 'auto',
  },
  morphTargetPlotList_withoutOverflow: {
    overflow: 'unset',
  },
  morphTargetPlotList_withCenterAlignment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useClasses;
