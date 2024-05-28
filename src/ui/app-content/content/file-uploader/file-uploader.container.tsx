import React from 'react';

import {
  nextStep,
  setAvailableAnimationList,
  setSelectedAnimationUUID,
  setThreeDModelExtension,
} from 'src/store/slices/app/app.slice';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { useError } from 'src/ui/app-content/content/error-context/use-error';
import FileUploader from 'src/ui/app-content/content/file-uploader/file-uploader';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-context/use-three-d-model';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import { useAppDispatch } from 'src/ui/common/hooks/store-hooks';

const FileUploaderContainer: React.FC = () => {
  const { setError, resetError } = useError();
  const dispatch = useAppDispatch();
  const { setThreeDModel } = useThreeDModel();

  const setModelExtension = (extension: SupportedThreeDModelExtension) => {
    dispatch(setThreeDModelExtension({ extension }));
  };
  const setAnimationList = (animations: AnimationItem[]): void => {
    dispatch(setAvailableAnimationList({ animations }));
    // REMOVE
    dispatch(setSelectedAnimationUUID({ animationUUID: animations[0].uuid }));
    dispatch(nextStep());
    dispatch(nextStep());
  };

  return (
    <FileUploader
      setThreeDModel={setThreeDModel}
      setThreeDModelExtension={setModelExtension}
      setAvailableAnimationList={setAnimationList}
      setError={setError}
      resetError={resetError}
    ></FileUploader>
  );
};

export default FileUploaderContainer;
