import { makeStyles } from '@material-ui/core/styles';

import { cardHSpacePx } from './animation-card.consts';
import { MUISpacePx } from 'src/ui/common/styles/consts';

const useClasses = makeStyles(() => ({
  animationCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: cardHSpacePx,
    maxWidth: '100%',
  },
  animationCard__rightBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: MUISpacePx,
  },
}));

export default useClasses;
