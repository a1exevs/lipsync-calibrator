import { useContext } from 'react';

import { UIBlockerContext } from 'src/ui/app-content/content/ui-blocker/context/ui-blocker.context';

export const useUiBlocker = () => useContext(UIBlockerContext);
