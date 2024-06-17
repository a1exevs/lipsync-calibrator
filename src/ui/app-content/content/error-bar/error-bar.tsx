import React from 'react';

import { ErrorType } from 'src/ui/app-content/content/error-context/error.types';
import { useError } from 'src/ui/app-content/content/error-context/use-error';
import MUIAlert from 'src/ui/shared/components/mui-alert/mui-alert';

const ErrorBar: React.FC = () => {
  const { error, show, resetError } = useError();

  const type: ErrorType = error?.type ?? 'error';
  const message = error?.message ?? '';

  return (
    <MUIAlert
      show={show}
      onCloseError={resetError}
      message={message}
      severity={type}
      variant="outlined"
      closable={true}
    />
  );
};

export default ErrorBar;
