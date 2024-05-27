import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/common/styles/consts';

const useClasses = makeStyles(() => ({
  appFooter: {
    position: 'fixed',
    bottom: 0,
    minHeight: 8 * MUISpacePx,
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useClasses;
