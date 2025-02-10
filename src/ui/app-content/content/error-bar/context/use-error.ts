import { useContext } from 'react';

import { ErrorContext } from 'src/ui/app-content/content/error-bar/context/error.context';

export const useError = () => useContext(ErrorContext);
