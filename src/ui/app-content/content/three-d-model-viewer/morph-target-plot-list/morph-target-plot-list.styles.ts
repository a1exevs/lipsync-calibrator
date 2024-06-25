import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  morphTargetPlotList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
    marginTop: 4 * MUISpacePx,
  },
}));

export default useClasses;
