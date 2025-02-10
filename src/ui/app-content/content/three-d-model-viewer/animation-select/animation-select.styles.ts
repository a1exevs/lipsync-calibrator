import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  animationSelect: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    maxHeight: `${30 * MUISpacePx}px`,
  },
  animationSelect__list: {
    overflowY: 'auto',
  },
}));

export default useClasses;
