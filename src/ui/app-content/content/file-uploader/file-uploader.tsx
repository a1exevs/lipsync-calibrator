import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Button, Typography } from '@mui/material';
import React, { useRef } from 'react';

import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import {
  supportedThreeDModelFormats,
  threeDModelFileUploaderAccept,
} from 'src/ui/app-content/content/file-uploader/file-uploader.consts';
import useClasses from 'src/ui/app-content/content/file-uploader/file-uploader.styles';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  setFilePath: (_: string) => void;
  setAvailableAnimationList: (animations: AnimationItem[]) => void;
};

const FileUploader: React.FC<Props> = () => {
  const classes = useClasses();

  const threeDModelfileInputRef = useRef<Nullable<HTMLInputElement>>(null);

  const handleThreeDModelFileChange = async (_: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    // TODO Implement
  };

  return (
    <MUIBox className={classes.fileUploader}>
      <Typography variant="body1" color="inherit" align="center">
        {currentLang.messages.THIS_APP_FOR_CALIBRATE} <br /> {currentLang.messages.SELECT_THREE_D_FILE}
      </Typography>
      <input
        type="file"
        accept={threeDModelFileUploaderAccept}
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
