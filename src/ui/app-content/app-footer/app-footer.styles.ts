import { makeStyles } from '@material-ui/core/styles';

import { appFooterVPaddingPx } from 'src/ui/app-content/app-footer/app-footer.consts';
import { MUISpacePx } from 'src/ui/shared/styles/consts';

const useClasses = makeStyles(() => ({
  appFooter: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    padding: `${appFooterVPaddingPx}px ${MUISpacePx * 3}px`,
  },
}));

export default useClasses;
