import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';

import { currentLang } from 'src/common/land/lang.helper';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  allowToExportToJSON: boolean;
};

const NavBar: React.FC<Props> = ({ allowToExportToJSON }) => {
  // TODO Select JSON button click handler
  // TODO Export to JSON button click handler
  const classes = useClasses();

  const getDownloadButtonTooltip = (hasAccess: boolean) =>
    !hasAccess ? currentLang.messages.DOWNLOAD_JSON_NOT_AVAILABLE : '';
  const getDownloadButtonTitle = (hasAccess: boolean) => (hasAccess ? currentLang.labels.DOWNLOAD_JSON : '');

  return (
    <MUIBox className={classes.navBar}>
      <IconButton title={currentLang.labels.UPLOAD_JSON} color="inherit">
        <UploadFileRoundedIcon />
      </IconButton>
      <Tooltip title={getDownloadButtonTooltip(allowToExportToJSON)}>
        <div>
          <IconButton
            title={getDownloadButtonTitle(allowToExportToJSON)}
            disabled={!allowToExportToJSON}
            color="inherit"
          >
            <DownloadForOfflineRoundedIcon />
          </IconButton>
        </div>
      </Tooltip>
    </MUIBox>
  );
};

export default NavBar;
