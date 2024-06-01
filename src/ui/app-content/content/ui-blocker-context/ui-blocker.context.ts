import { createContext } from 'react';

export const UIBlockerContext = createContext<{
  isUIBlocked: boolean;
  blockUI: () => void;
  unblockUI: () => void;
}>({
  isUIBlocked: false,
  blockUI: () => {},
  unblockUI: () => {},
});
