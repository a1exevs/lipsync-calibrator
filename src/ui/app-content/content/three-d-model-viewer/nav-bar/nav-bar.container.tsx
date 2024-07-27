import React from 'react';

import {
  allowToExportToJSON,
  morphTargetDataFileName,
  morphTargetDataMap,
  wasMorphTargetDataChanged,
} from 'src/store/slices/app/app.selectors';
import { resetMorphTargetData, setMorphTargetData, setWasMorphTargetDataChanged } from 'src/store/slices/app/app.slice';
import { MorphTargetData } from 'src/store/slices/app/app.types';
import { useError } from 'src/ui/app-content/content/error-bar/context/use-error';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/contexts/three-d-model/use-three-d-model';
import NavBar from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar';
import { useUiBlocker } from 'src/ui/app-content/content/ui-blocker/context/use-ui-blocker';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const NavBarContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const allowToExport = useAppSelector(allowToExportToJSON);
  const morphTargetMap = useAppSelector(morphTargetDataMap);
  const morphTargetDataFile = useAppSelector(morphTargetDataFileName);
  const wasMorphTargetChanged = useAppSelector(wasMorphTargetDataChanged);

  const { hasMeshObject } = useThreeDModel();

  const setMorphTargetDataFromJSON = (data: MorphTargetData) => {
    dispatch(setMorphTargetData({ data }));
  };
  const resetMorphTargetDataFromJSON = () => {
    dispatch(resetMorphTargetData());
  };
  const setWasMorphTargetChanged = (hasChanges: boolean) => {
    dispatch(setWasMorphTargetDataChanged({ hasChanges }));
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
      resetMorphTargetDataFromJSON={resetMorphTargetDataFromJSON}
      morphTargetDataMap={morphTargetMap}
      morphTargetDataFileName={morphTargetDataFile}
      modelHasMeshObject={hasMeshObject}
      wasMorphTargetDataChanged={wasMorphTargetChanged}
      setWasMorphTargetDataChanged={setWasMorphTargetChanged}
    />
  );
};

export default NavBarContainer;
