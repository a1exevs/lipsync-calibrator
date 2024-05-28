import { TypographyProps } from '@mui/material/Typography';

export const MUISpacePx = 8;

export const windowMinWidth = 40 * MUISpacePx;

export const spaceSuperSmall = 1;
export const spaceExtraSmall = 2;
export const spaceSmall = 3;

export const borderSuperSmall = '1px';

export const flexGrowNormal = 1;

export const opacityNull = 0;
export const opacityMedium = 0.5;
export const opacityFull = 1;

export const durationSmall = '0.2s';
export const durationMedium = '0.5s';
export const durationLarge = '1s';

export const cbLikeEaseInOut = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const softShadow = `0 0 4px 16px rgb(0, 0, 0, 0.12)`;
export const btnHoverShadow = '0 0 1px 4px rgb(0,0,0,0.2)';
export const afterClickBtnShadow = `0 0 4px 16px rgb(0,0,0,0.5)`;
export const activeBtnShadow = `0 0 1px 4px rgb(255,255,255,0.5)`;

export const transformFast = '0.3s ease-out';

export const circleBorder = '50%';

export const textOverflowEllipsis = (): TypographyProps => {
  return {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  };
};
