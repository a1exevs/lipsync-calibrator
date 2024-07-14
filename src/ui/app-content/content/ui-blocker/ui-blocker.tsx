import React from 'react';

import { useUiBlocker } from 'src/ui/app-content/content/ui-blocker/context/use-ui-blocker';
import MUIBackdrop from 'src/ui/shared/components/mui-backdrop/mui-backdrop';

const UIBlocker: React.FC = () => {
  const { isUIBlocked } = useUiBlocker();

  return <MUIBackdrop isOpen={isUIBlocked} />;
};

export default UIBlocker;
