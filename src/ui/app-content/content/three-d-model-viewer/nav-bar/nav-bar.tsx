import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useRef } from 'react';

import { getExtensionByFile } from 'src/common/helpers/file';
import { isUndefined } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-context/error.types';
import {
  jsonFileExtension,
  jsonFileUploaderAccept,
} from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar.consts';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar.styles';
import { validateSelectedJSONStructure } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator';
import FileInput from 'src/ui/shared/components/file-input/file-input';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  allowToExportToJSON: boolean;
  blockUI: () => void;
  unblockUI: () => void;
  setError: SetErrorFn;
  resetError: ResetErrorFn;
};

const NavBar: React.FC<Props> = ({ allowToExportToJSON, setError, resetError, blockUI, unblockUI }) => {
  // TODO Export to JSON button click handler
  const classes = useClasses();

  const jsonFileInputRef = useRef<Nullable<HTMLInputElement>>(null);

  const getDownloadButtonTooltip = (hasAccess: boolean) =>
    !hasAccess ? currentLang.messages.DOWNLOAD_JSON_NOT_AVAILABLE : '';
  const getDownloadButtonTitle = (hasAccess: boolean) => (hasAccess ? currentLang.labels.DOWNLOAD_JSON : '');

  const handleUploadJSONButtonClick = (): void => {
    jsonFileInputRef.current?.click();
  };
  const resetAndUnblock = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.value = '';
    unblockUI();
  };
  const handleJSONFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // TODO Maybe replace to separate helper
    try {
      blockUI();
      const file = event.target.files?.[0];
      if (isUndefined(file) || !file.size) {
        throw new Error(currentLang.errors.INVALID_FILE);
      }
      const fileExtension = getExtensionByFile(file);
      if (fileExtension !== jsonFileExtension) {
        throw new Error(currentLang.errors.SELECTED_FILE_IS_NOT_JSON);
      }

      const reader = new FileReader();
      reader.onabort = () => resetAndUnblock(event);
      reader.onerror = () => {
        setError(currentLang.errors.ERROR_LOADING_JSON, 'error');
        resetAndUnblock(event);
      };
      reader.onload = e => {
        try {
          const { isValid, error } = validateSelectedJSONStructure(e.target?.result);
          if (!isValid) {
            throw new Error(error);
          }
          resetError();
        } catch (e) {
          if (e instanceof Error) {
            setError(e.message, 'error');
          }
        } finally {
          resetAndUnblock(event);
        }
      };

      reader.readAsText(file);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message, 'error');
      }
      resetAndUnblock(event);
    }
  };

  return (
    <MUIBox className={classes.navBar}>
      <IconButton onClick={handleUploadJSONButtonClick} title={currentLang.labels.UPLOAD_JSON} color="inherit">
        <UploadFileRoundedIcon />
        <FileInput ref={jsonFileInputRef} accept={jsonFileUploaderAccept} handleFileUpload={handleJSONFileUpload} />
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
