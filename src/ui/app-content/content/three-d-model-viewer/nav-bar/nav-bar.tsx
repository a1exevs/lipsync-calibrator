import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { Button, Tooltip } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import React, { useRef } from 'react';

import { getFileData } from 'src/common/helpers/file';
import { isNull, isUndefined } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { MorphTargetData } from 'src/store/slices/app/app.types';
import { ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-bar/context/error.types';
import {
  jsonFileDownloadPostfix,
  jsonFileExtension,
  jsonFileUploaderAccept,
} from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar.consts';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar.styles';
import { validateSelectedJSONStructure } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator';
import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import FileInput from 'src/ui/shared/components/file-input/file-input';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  allowToExportToJSON: boolean;
  blockUI: () => void;
  unblockUI: () => void;
  setError: SetErrorFn;
  resetError: ResetErrorFn;
  morphTargetDataMap: Nullable<Record<string, Shape>>;
  morphTargetDataFileName: Nullable<string>;
  setMorphTargetData: (shapeData: MorphTargetData) => void;
  resetMorphTargetDataFromJSON: () => void;
  modelHasMeshObject: boolean;
  wasMorphTargetDataChanged: boolean;
  setWasMorphTargetDataChanged: (hasChanges: boolean) => void;
};

const NavBar: React.FC<Props> = ({
  allowToExportToJSON,
  setError,
  resetError,
  blockUI,
  unblockUI,
  setMorphTargetData,
  resetMorphTargetDataFromJSON,
  morphTargetDataMap,
  morphTargetDataFileName,
  modelHasMeshObject,
  wasMorphTargetDataChanged,
  setWasMorphTargetDataChanged,
}) => {
  const classes = useClasses();
  const confirm = useConfirm();

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

  const handleJSONFileUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    // TODO Maybe replace to separate helper
    try {
      if (!modelHasMeshObject) {
        await confirm({
          title: currentLang.labels.CONFIRMATION,
          description: currentLang.messages.MODEL_WITHOUT_MESH_OBJECTS,
          cancellationButtonProps: { color: 'secondary' },
        });
      }

      if (wasMorphTargetDataChanged) {
        await confirm({
          title: currentLang.labels.CONFIRMATION,
          description: currentLang.messages.UNSAVED_PLOT_CHANGES_IMPORT_CONFIRMATION,
          cancellationButtonProps: { color: 'secondary' },
        });
      }

      blockUI();
      resetMorphTargetDataFromJSON();
      const file = event.target.files?.[0];
      if (isUndefined(file) || !file.size) {
        throw new Error(currentLang.errors.INVALID_FILE);
      }
      const { fileName, extension } = getFileData(file);
      if (extension !== jsonFileExtension) {
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
          const { isValid, error, data } = validateSelectedJSONStructure(e.target?.result);
          if (!isValid) {
            throw new Error(error);
          }
          setMorphTargetData({ data, fileName });
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

  const handleDownloadJSONButtonClick = (): void => {
    if (isNull(morphTargetDataMap) || isNull(morphTargetDataFileName)) {
      return;
    }
    const jsonStr = JSON.stringify(Object.values(morphTargetDataMap), null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${morphTargetDataFileName}${jsonFileDownloadPostfix}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setWasMorphTargetDataChanged(false);
  };

  return (
    <MUIBox className={classes.navBar}>
      <Button
        startIcon={<UploadFileRoundedIcon />}
        onClick={handleUploadJSONButtonClick}
        title={currentLang.labels.UPLOAD_JSON}
        color="inherit"
      >
        <FileInput ref={jsonFileInputRef} accept={jsonFileUploaderAccept} handleFileUpload={handleJSONFileUpload} />
        {currentLang.labels.UPLOAD_JSON}
      </Button>
      <Tooltip title={getDownloadButtonTooltip(allowToExportToJSON)}>
        <div>
          <Button
            startIcon={<DownloadForOfflineRoundedIcon />}
            title={getDownloadButtonTitle(allowToExportToJSON)}
            disabled={!allowToExportToJSON}
            color="inherit"
            onClick={handleDownloadJSONButtonClick}
          >
            {currentLang.labels.DOWNLOAD_JSON}
          </Button>
        </div>
      </Tooltip>
    </MUIBox>
  );
};

export default NavBar;
