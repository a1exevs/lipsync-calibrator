import { useContext } from 'react';

import { ErrorContext } from 'src/ui/app-content/content/error-context/error.context';

export const useError = () => useContext(ErrorContext);
