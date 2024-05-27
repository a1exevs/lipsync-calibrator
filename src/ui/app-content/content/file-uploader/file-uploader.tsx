import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Button, Typography } from '@mui/material';
import React from 'react';

import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { supportedFormats } from 'src/ui/app-content/content/file-uploader/file-uploader.consts';
import useClasses from 'src/ui/app-content/content/file-uploader/file-uploader.styles';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  setFilePath: (_: string) => void;
  setAvailableAnimationList: (animations: AnimationItem[]) => void;
};

const FileUploader: React.FC<Props> = () => {
  const classes = useClasses();

  return (
    <MUIBox className={classes.fileUploader}>
      <Typography variant="body1" color="inherit" align="center">
        {currentLang.messages.THIS_APP_FOR_CALIBRATE} <br /> {currentLang.messages.SELECT_THREE_D_FILE}
      </Typography>
      <Button variant="contained" startIcon={<UploadFileOutlinedIcon />}>
        <label>{currentLang.labels.UPLOAD_FILE_BTN}</label>
      </Button>
      <Typography variant="body1" align="center">
        {interpolateStrings(currentLang.messages.SUPPORTED_FORMATS, String(supportedFormats))}
      </Typography>
    </MUIBox>
  );
};

export default FileUploader;
