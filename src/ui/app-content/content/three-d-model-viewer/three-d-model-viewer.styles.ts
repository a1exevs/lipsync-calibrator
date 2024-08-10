import { makeStyles } from '@material-ui/core/styles';

import { APP_BAR_MIN_HEIGHT_PX } from 'src/ui/app-content/app-bar/app-bar.consts';
import { APP_FOOTER_HEIGHT_PX } from 'src/ui/app-content/app-footer/app-footer.consts';
import { GENERIC_PAPER_MARGIN_PX, GENERIC_PAPER_PADDING_PX } from 'src/ui/shared/components/mui-paper/mui-paper.consts';
import { MUISpacePx } from 'src/ui/shared/styles/consts';

export const PANEL_HEIGHT = `calc(100vh - ${APP_BAR_MIN_HEIGHT_PX}px - ${APP_FOOTER_HEIGHT_PX}px - ${2 * GENERIC_PAPER_MARGIN_PX}px - ${2 * GENERIC_PAPER_PADDING_PX}px)`;
export const LEFT_TOOLBAR_WIDTH = `${8 * MUISpacePx}px`;
export const RIGHT_TOOLBAR_WIDTH = `${40 * MUISpacePx}px`;

const LEFT_PANEL_TEMPLATE_COLUMN = `minmax(${LEFT_TOOLBAR_WIDTH}, ${LEFT_TOOLBAR_WIDTH})`;
const CONTENT_PANEL_TEMPLATE_COLUMN = `minmax(calc(100% - ${LEFT_TOOLBAR_WIDTH} - ${RIGHT_TOOLBAR_WIDTH} - ${4 * MUISpacePx}px),calc(100% - ${LEFT_TOOLBAR_WIDTH} - ${RIGHT_TOOLBAR_WIDTH} - ${4 * MUISpacePx}px))`;
const RIGHT_PANEL_TEMPLATE_COLUMN = `minmax(${RIGHT_TOOLBAR_WIDTH},${RIGHT_TOOLBAR_WIDTH})`;

const useClasses = makeStyles(() => ({
  threeDModelViewer: {
    display: 'grid',
    gridTemplateColumns: `${LEFT_PANEL_TEMPLATE_COLUMN} ${CONTENT_PANEL_TEMPLATE_COLUMN} ${RIGHT_PANEL_TEMPLATE_COLUMN}`,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  threeDModelViewer__leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
    alignItems: 'center',
    justifyContent: 'end',
    height: PANEL_HEIGHT,
  },
  threeDModelViewer__contentPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
    alignItems: 'center',
    justifyContent: 'center',
    height: PANEL_HEIGHT,
  },
  threeDModelViewer__rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2 * MUISpacePx,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: PANEL_HEIGHT,
  },
}));

export default useClasses;
