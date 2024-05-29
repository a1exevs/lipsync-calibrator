import { makeStyles } from '@material-ui/core/styles';

import { MUISpacePx } from 'src/ui/common/styles/consts';

const useClasses = makeStyles(() => ({
  animationCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2 * MUISpacePx,
    maxWidth: '100%',
  },
  animationCard__rightBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: MUISpacePx,
  },
}));

export default useClasses;
