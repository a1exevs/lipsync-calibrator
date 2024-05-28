import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Button, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

import { getExtensionByFile } from 'src/common/helpers/file';
import { isUndefined } from 'src/common/helpers/guards';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-context/error.types';
import {
  supportedThreeDModelFormats,
  threeDModelUploaderAccept,
} from 'src/ui/app-content/content/file-uploader/file-uploader.consts';
import useClasses from 'src/ui/app-content/content/file-uploader/file-uploader.styles';
import { isThreeDModelExtensionSupported } from 'src/ui/app-content/content/file-uploader/helpers/supported-three-d-model-extensions.helper';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  setError: SetErrorFn;
  resetError: ResetErrorFn;
};

const FileUploader: React.FC<Props> = ({ setError }) => {
  // TODO add progress component
  const [_, __] = useState<number>(0);

  const classes = useClasses();

  const threeDModelfileInputRef = useRef<Nullable<HTMLInputElement>>(null);

  const handleThreeDModelFileChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    try {
      const file = event.target.files?.[0];
      if (isUndefined(file) || !file.size) {
        throw new Error(currentLang.errors.INVALID_FILE);
      }

      const fileExtension = getExtensionByFile(file);
      if (!isThreeDModelExtensionSupported(fileExtension)) {
        throw new Error(currentLang.errors.MODEL_FILE_EXTENSION_IS_NOT_SUPPORTED);
      }

      // TODO Immplement
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message, 'error');
      }
    } finally {
      event.target.value = '';
    }
  };

  return (
    <MUIBox className={classes.fileUploader}>
      <Typography variant="body1" color="inherit" align="center">
        {currentLang.messages.THIS_APP_FOR_CALIBRATE} <br /> {currentLang.messages.SELECT_THREE_D_FILE}
      </Typography>
      <input
        type="file"
        accept={threeDModelUploaderAccept}
        onChange={handleThreeDModelFileChange}
        ref={threeDModelfileInputRef}
        style={{ display: 'none' }}
      />
      <Button
        variant="contained"
        startIcon={<UploadFileOutlinedIcon />}
        onClick={() => threeDModelfileInputRef.current?.click()}
      >
        <label>{currentLang.labels.UPLOAD_FILE_BTN}</label>
      </Button>
      <Typography variant="body1" align="center">
        {interpolateStrings(currentLang.messages.SUPPORTED_FORMATS, String(supportedThreeDModelFormats))}
      </Typography>
    </MUIBox>
  );
};

export default FileUploader;
