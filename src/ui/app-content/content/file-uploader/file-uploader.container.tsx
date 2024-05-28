import React from 'react';

import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { useError } from 'src/ui/app-content/content/error-context/use-error';
import FileUploader from 'src/ui/app-content/content/file-uploader/file-uploader';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-context/use-three-d-model';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

const FileUploaderContainer: React.FC = () => {
  const { setError, resetError } = useError();
  const { setThreeDModel } = useThreeDModel();

  const setModelExtension = (_: SupportedThreeDModelExtension) => {};
  const setAnimationList = (_: AnimationItem[]): void => {};

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
