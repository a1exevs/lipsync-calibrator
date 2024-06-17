import { makeStyles } from '@material-ui/core/styles';

import {
  cardHSpacePx,
  maxWidthPercent,
} from 'src/ui/app-content/content/animation-list/animation-card/animation-card.consts';
import { cbLikeEaseInOut, durationSmall, MUISpacePx, opacityMedium } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  animationCard: {
    maxWidth: maxWidthPercent,
    transition: `opacity ${durationSmall} ${cbLikeEaseInOut}`,
    cursor: 'pointer',

    '&:hover': {
      opacity: opacityMedium,
    },
  },
  animationCard__paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: cardHSpacePx,
  },
  animationCard__rightBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: MUISpacePx,
  },
}));

export default useClasses;
