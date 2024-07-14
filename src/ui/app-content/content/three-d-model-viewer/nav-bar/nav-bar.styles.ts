import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  navBar: {
    display: 'flex',
    gap: MUISpacePx,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar__buttons: {
    display: 'flex',
    gap: MUISpacePx,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useClasses;
