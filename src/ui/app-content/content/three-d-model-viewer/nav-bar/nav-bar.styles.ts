import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  navBar: {
    display: 'flex',
    gap: 2 * MUISpacePx,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useClasses;
