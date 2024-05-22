import React from 'react';

type Props = {
  setFilePath: (_: string) => void;
  // TODO Correct types when we will load animations via 3d model
  setAvailableAnimationList: (animations: string[]) => void;
};

const FileUploader: React.FC<Props> = () => {
  // TODO Implement me
  return <div>FileUploader</div>;
};

export default FileUploader;
