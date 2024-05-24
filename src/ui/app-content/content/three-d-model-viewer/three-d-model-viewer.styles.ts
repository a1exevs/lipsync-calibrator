import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/common/styles/consts';

const useClasses = makeStyles(() => ({
  threeDModelViewer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useClasses;
