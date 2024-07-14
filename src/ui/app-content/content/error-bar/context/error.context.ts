import { createContext } from 'react';

import { Nullable } from 'src/common/types/common';
import { Error, ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-bar/context/error.types';

export const ErrorContext = createContext<{
  error: Nullable<Error>;
  show: boolean;
  setError: SetErrorFn;
  resetError: ResetErrorFn;
}>({
  error: null,
  show: false,
  setError: () => {},
  resetError: () => {},
});
