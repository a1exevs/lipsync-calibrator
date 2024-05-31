import React, { ReactNode, useState } from 'react';

import { UIBlockerContext } from 'src/ui/app-content/content/ui-blocker-context/ui-blocker.context';

type Props = {
  children: ReactNode;
};

const UIBlockerProvider: React.FC<Props> = ({ children }) => {
  const [isUIBlocked, setUIBlock] = useState<boolean>(false);
  const blockUI = () => setUIBlock(true);
  const unblockUI = () => setUIBlock(false);
  return <UIBlockerContext.Provider value={{ isUIBlocked, blockUI, unblockUI }}>{children}</UIBlockerContext.Provider>;
};

export default UIBlockerProvider;
