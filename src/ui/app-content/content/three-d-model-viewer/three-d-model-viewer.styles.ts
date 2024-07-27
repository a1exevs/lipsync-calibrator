import { makeStyles } from '@material-ui/core/styles';

import { APP_BAR_MIN_HEIGHT_PX } from 'src/ui/app-content/app-bar/app-bar.consts';
import { APP_FOOTER_HEIGHT_PX } from 'src/ui/app-content/app-footer/app-footer.consts';
import { GENERIC_PAPER_MARGIN_PX, GENERIC_PAPER_PADDING_PX } from 'src/ui/shared/components/mui-paper/mui-paper.consts';
import { MUISpacePx } from 'src/ui/shared/styles/consts';

const PANEL_HEIGHT = `calc(100vh - ${APP_BAR_MIN_HEIGHT_PX}px - ${APP_FOOTER_HEIGHT_PX}px - ${2 * GENERIC_PAPER_MARGIN_PX}px - ${2 * GENERIC_PAPER_PADDING_PX}px)`;
const LEFT_TOOLBAR_WIDTH = `${8 * MUISpacePx}px`;
const useClasses = makeStyles(() => ({
  threeDModelViewer: {
    display: 'grid',
    gridTemplateColumns: `minmax(${LEFT_TOOLBAR_WIDTH}, ${LEFT_TOOLBAR_WIDTH}) minmax(80%,80%) minmax(calc(15% - ${LEFT_TOOLBAR_WIDTH}),calc(15% - ${LEFT_TOOLBAR_WIDTH}))`,
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
