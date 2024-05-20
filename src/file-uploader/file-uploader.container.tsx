import React from 'react';

import FileUploader from 'src/file-uploader/file-uploader';

const FileUploaderContainer: React.FC = () => {
  const setFilePath = (_: string) => {
    // TODO set to redux
  };
  const setAvailableAnimationList = (_: string[]) => {
    // TODO set to redux
  };

  return <FileUploader setFilePath={setFilePath} setAvailableAnimationList={setAvailableAnimationList}></FileUploader>;
};

export default FileUploaderContainer;
