import { cardHSpacePx } from 'src/ui/app-content/content/animation-list/animation-card/animation-card.consts';
import { GENERIC_PAPER_MARGIN_PX, GENERIC_PAPER_PADDING_PX } from 'src/ui/common/components/mui-paper/mui-paper.consts';

export const calculateAnimationCardRightBlockWidth = (): string => {
  const iconWidth = '1em';
  return `calc(100% - ${iconWidth} - ${GENERIC_PAPER_PADDING_PX}px - ${cardHSpacePx}px - ${GENERIC_PAPER_MARGIN_PX}px)`;
};
