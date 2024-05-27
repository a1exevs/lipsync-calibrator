import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/common/styles/consts';

const useClasses = makeStyles(() => ({
  appFooter: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    padding: `${MUISpacePx}px 0 ${MUISpacePx}px ${MUISpacePx * 3}px`,
  },
}));

export default useClasses;
