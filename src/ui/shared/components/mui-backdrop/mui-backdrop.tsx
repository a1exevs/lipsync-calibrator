import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

import { isUndefined } from 'src/common/helpers/guards';

type Props = {
  withSolidBackground?: boolean;
  isOpen?: boolean;
  exitDuration?: number;
};

const MUIBackdrop: React.FC<Props> = ({ withSolidBackground = false, isOpen, exitDuration }) => {
  const show = isUndefined(isOpen) ? true : isOpen;
  return (
    <Backdrop
      timeout={{ exit: exitDuration }}
      sx={{
        visibility: show ? '' : 'hidden',
        backgroundColor: theme => (withSolidBackground ? theme.palette.background.default : ''),
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
      open={show}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default MUIBackdrop;
