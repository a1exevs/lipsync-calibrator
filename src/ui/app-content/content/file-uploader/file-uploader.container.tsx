import React from 'react';

import { useError } from 'src/ui/app-content/content/error-context/use-error';
import FileUploader from 'src/ui/app-content/content/file-uploader/file-uploader';

const FileUploaderContainer: React.FC = () => {
  const { setError, resetError } = useError();

  // TODO Implement logic

  return <FileUploader setError={setError} resetError={resetError}></FileUploader>;
};

export default FileUploaderContainer;
