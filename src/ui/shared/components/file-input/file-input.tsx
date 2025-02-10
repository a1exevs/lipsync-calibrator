import React, { forwardRef } from 'react';

import { Nullable, Optional } from 'src/common/types/common';

type Props = {
  accept: Optional<string>;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<Nullable<HTMLInputElement>>> = forwardRef(
  ({ handleFileUpload, accept }, ref) => {
    return <input type="file" ref={ref} accept={accept} onChange={handleFileUpload} style={{ display: 'none' }} />;
  },
);

export default FileInput;
