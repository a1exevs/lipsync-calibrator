import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  fileUploader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
  },
}));

export default useClasses;
