import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  morphTargetPlotList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
    margin: 2 * MUISpacePx,
    maxHeight: 40 * MUISpacePx,
    maxWidth: '100%',
    overflow: 'auto',
  },
}));

export default useClasses;
