import { makeStyles } from '@material-ui/core/styles';

import { flexGrowNormal, MUISpacePx } from 'src/ui/common/styles/consts';

const useClasses = makeStyles(() => ({
  appBar: {
    minHeight: 8 * MUISpacePx,
  },
  appBar__leftBlock: {
    display: 'flex',
    flexGrow: flexGrowNormal,
    gap: 2 * MUISpacePx,
    alignItems: 'center',
  },
}));

export default useClasses;
