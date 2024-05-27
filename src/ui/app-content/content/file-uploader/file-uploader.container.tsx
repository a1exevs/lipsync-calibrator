import React from 'react';

import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import FileUploader from 'src/ui/app-content/content/file-uploader/file-uploader';

const FileUploaderContainer: React.FC = () => {
  const setFilePath = (_: string) => {
    // TODO set to redux
  };
  const setAvailableAnimationList = (_: AnimationItem[]) => {
    // TODO set to redux
  };

  return <FileUploader setFilePath={setFilePath} setAvailableAnimationList={setAvailableAnimationList}></FileUploader>;
};

export default FileUploaderContainer;
