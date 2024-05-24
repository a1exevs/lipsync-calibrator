import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Button, Typography } from '@mui/material';
import React from 'react';

import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { supportedFormats } from 'src/ui/app-content/content/file-uploader/file-uploader.consts';
import useClasses from 'src/ui/app-content/content/file-uploader/file-uploader.styles';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  setFilePath: (_: string) => void;
  // TODO Correct types when we will load animations via 3d model
  setAvailableAnimationList: (animations: string[]) => void;
};

const FileUploader: React.FC<Props> = () => {
  const classes = useClasses();

  return (
    <MUIBox className={classes.fileUploader}>
      <Typography variant="h6" color="inherit" align="center">
        {currentLang.messages.THIS_APP_FOR_CALIBRATE} <br /> {currentLang.messages.SELECT_THREE_D_FILE}
      </Typography>
      <Button variant="contained" startIcon={<UploadFileOutlinedIcon />}>
        <label>{currentLang.labels.UPLOAD_FILE_BTN}</label>
      </Button>
      <Typography variant="h6" align="center">
        {interpolateStrings(currentLang.messages.SUPPORTED_FORMATS, String(supportedFormats))}
      </Typography>
    </MUIBox>
  );
};

export default FileUploader;
