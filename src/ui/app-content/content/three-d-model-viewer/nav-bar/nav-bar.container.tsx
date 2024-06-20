import React from 'react';

import { allowToExportToJSON, morphTargetData } from 'src/store/slices/app/app.selectors';
import { setMorphTargetData } from 'src/store/slices/app/app.slice';
import { MorphTargetData } from 'src/store/slices/app/app.types';
import { useError } from 'src/ui/app-content/content/error-context/use-error';
import NavBar from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar';
import { useUiBlocker } from 'src/ui/app-content/content/ui-blocker-context/use-ui-blocker';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const NavBarContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const allowToExport = useAppSelector(allowToExportToJSON);
  const morphTargets = useAppSelector(morphTargetData);

  const setMorphTargetDataFromJSON = (data: MorphTargetData) => {
    dispatch(setMorphTargetData({ data }));
  };

  const { blockUI, unblockUI } = useUiBlocker();
  const { setError, resetError } = useError();

  return (
    <NavBar
      allowToExportToJSON={allowToExport}
      blockUI={blockUI}
      unblockUI={unblockUI}
      setError={setError}
      resetError={resetError}
      setMorphTargetData={setMorphTargetDataFromJSON}
      morphTargetData={morphTargets}
    />
  );
};

export default NavBarContainer;
