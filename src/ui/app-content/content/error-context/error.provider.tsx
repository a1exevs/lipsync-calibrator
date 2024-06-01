import React, { ReactNode, useState } from 'react';

import { DEFAULT_SMALL_DELAY } from 'src/common/consts/consts';
import { Nullable } from 'src/common/types/common';
import { ErrorContext } from 'src/ui/app-content/content/error-context/error.context';
import { Error, ErrorType, ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-context/error.types';

type Props = {
  children: ReactNode;
};

const ErrorProvider: React.FC<Props> = ({ children }) => {
  const [error, _setError] = useState<Nullable<Error>>(null);
  const [show, setShow] = useState<boolean>(false);

  const setError: SetErrorFn = (message: string, type: ErrorType) => {
    _setError({ type, message });
    setShow(true);
  };

  const resetError: ResetErrorFn = () => {
    setShow(false);
    setTimeout(() => {
      _setError(null);
    }, DEFAULT_SMALL_DELAY);
  };

  return <ErrorContext.Provider value={{ error, show, setError, resetError }}>{children}</ErrorContext.Provider>;
};

export default ErrorProvider;
