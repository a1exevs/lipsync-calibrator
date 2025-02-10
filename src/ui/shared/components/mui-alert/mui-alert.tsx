import CloseIcon from '@mui/icons-material/Close';
import { Alert, Collapse } from '@mui/material';
import { AlertColor, AlertProps } from '@mui/material/Alert/Alert';
import IconButton from '@mui/material/IconButton';
import React, { ReactNode, useEffect } from 'react';

import { Optional } from 'src/common/types/common';

type Props = {
  message: string;
  severity: AlertColor;
  variant: AlertProps['variant'];
  show: boolean;
  closable?: boolean;
  onShowError?: () => void;
  onCloseError?: () => void;
};

const MUIAlert: React.FC<Props> = ({
  message,
  severity,
  variant,
  show,
  closable = true,
  onCloseError = () => {},
  onShowError = () => {},
}) => {
  const onOpen = (): void => {
    onShowError();
  };
  const onClose = (): void => {
    onCloseError();
  };

  const closeButton: Optional<ReactNode> = closable ? (
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => {
        onClose();
      }}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  ) : undefined;

  useEffect(() => {
    if (show) {
      onOpen();
    } else {
      onClose();
    }
  }, [show]);

  return (
    <Collapse in={show}>
      <Alert severity={severity} variant={variant} action={closeButton} sx={{ mb: 2 }}>
        {message}
      </Alert>
    </Collapse>
  );
};

export default MUIAlert;
