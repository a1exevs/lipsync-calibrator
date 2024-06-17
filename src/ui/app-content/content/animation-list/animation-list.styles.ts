import { makeStyles } from '@material-ui/core/styles';

import { containerWidth } from 'src/ui/app-content/content/animation-list/animation-list.consts';
import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  animationList: {
    display: 'flex',
    flexDirection: 'column',
    width: containerWidth,
    gap: 2 * MUISpacePx,
    marginTop: 4 * MUISpacePx,
  },
}));

export default useClasses;
