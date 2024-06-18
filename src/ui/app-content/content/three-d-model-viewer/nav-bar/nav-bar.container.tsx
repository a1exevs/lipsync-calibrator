import React from 'react';

import { useError } from 'src/ui/app-content/content/error-context/use-error';
import NavBar from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar';
import { useUiBlocker } from 'src/ui/app-content/content/ui-blocker-context/use-ui-blocker';

const NavBarContainer: React.FC = () => {
  // TODO Push data to store logic
  // TODO GEt access-state from store
  const allowToExportToJSON = true;

  const { blockUI, unblockUI } = useUiBlocker();
  const { setError, resetError } = useError();

  return (
    <NavBar
      allowToExportToJSON={allowToExportToJSON}
      blockUI={blockUI}
      unblockUI={unblockUI}
      setError={setError}
      resetError={resetError}
    />
  );
};

export default NavBarContainer;
