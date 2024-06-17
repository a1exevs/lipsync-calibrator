import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import IconButton from '@mui/material/IconButton';
import React from 'react';

import { currentLang } from 'src/common/land/lang.helper';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

const NavBar: React.FC = () => {
  // TODO Component layout
  // TODO Export to JSON button show/hide logic
  // TODO Select JSON button click handler
  // TODO Export to JSON button click handler
  const classes = useClasses();

  return (
    <MUIBox className={classes.navBar}>
      <IconButton title={currentLang.labels.UPLOAD_JSON} color="inherit">
        <UploadFileRoundedIcon />
      </IconButton>
      <IconButton title={currentLang.labels.DOWNLOAD_JSON} color="inherit">
        <DownloadForOfflineRoundedIcon />
      </IconButton>
    </MUIBox>
  );
};

export default NavBar;
