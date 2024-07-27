import React from 'react';

import { nextStep, setAvailableAnimationList, setThreeDModelExtension } from 'src/store/slices/app/app.slice';
import { AnimationItem } from 'src/store/slices/app/app.types';
import { useError } from 'src/ui/app-content/content/error-bar/context/use-error';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/contexts/three-d-model/use-three-d-model';
import FileUploader from 'src/ui/app-content/content/three-d-model-viewer/file-uploader/file-uploader';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';
import { useUiBlocker } from 'src/ui/app-content/content/ui-blocker/context/use-ui-blocker';
import { useAppDispatch } from 'src/ui/shared/hooks/store-hooks';

const FileUploaderContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setError, resetError } = useError();
  const { setThreeDModel, setThreeDModelExtension: setThreeDModelExtensionCtxt } = useThreeDModel();
  const { blockUI, unblockUI } = useUiBlocker();

  const setModelExtension = (extension: SupportedThreeDModelExtension) => {
    setThreeDModelExtensionCtxt(extension);
    dispatch(setThreeDModelExtension({ extension }));
  };
  const setAnimationList = (animations: AnimationItem[]): void => {
    dispatch(setAvailableAnimationList({ animations }));
  };
  const goToNextAppStep = (): void => {
    dispatch(nextStep());
  };

  return (
    <FileUploader
      setThreeDModel={setThreeDModel}
      setThreeDModelExtension={setModelExtension}
      setAvailableAnimationList={setAnimationList}
      setError={setError}
      resetError={resetError}
      goToNextStep={goToNextAppStep}
      blockUI={blockUI}
      unblockUI={unblockUI}
    ></FileUploader>
  );
};

export default FileUploaderContainer;
