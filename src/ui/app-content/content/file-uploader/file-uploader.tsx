import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Button, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { getExtensionByFile } from 'src/common/helpers/file';
import { isEmpty, isUndefined } from 'src/common/helpers/guards';
import { calculatePercentage } from 'src/common/helpers/number';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-context/error.types';
import {
  supportedThreeDModelFormats,
  threeDModelUploaderAccept,
} from 'src/ui/app-content/content/file-uploader/file-uploader.consts';
import useClasses from 'src/ui/app-content/content/file-uploader/file-uploader.styles';
import { getAvailableAnimationListByModel } from 'src/ui/app-content/content/file-uploader/helpers/animations-data-reader.helper';
import { ThreeDModelFileLoaderFactory } from 'src/ui/app-content/content/file-uploader/helpers/file-loaders.factory';
import { isThreeDModelExtensionSupported } from 'src/ui/app-content/content/file-uploader/helpers/supported-three-d-model-extensions.helper';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  setThreeDModel: (_: ThreeDModel) => void;
  setThreeDModelExtension: (_: SupportedThreeDModelExtension) => void;
  setAvailableAnimationList: (animations: AnimationItem[]) => void;
  setError: SetErrorFn;
  resetError: ResetErrorFn;
  goToNextStep: () => void;
  blockUI: () => void;
  unblockUI: () => void;
};

const FileUploader: React.FC<Props> = ({
  setError,
  resetError,
  setThreeDModel,
  setAvailableAnimationList,
  setThreeDModelExtension,
  goToNextStep,
  blockUI,
  unblockUI,
}) => {
  // TODO add progress component
  const [_, setProgress] = useState<number>(0);

  const classes = useClasses();

  const threeDModelfileInputRef = useRef<Nullable<HTMLInputElement>>(null);

  const handleThreeDModelFileChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    try {
      blockUI();
      const file = event.target.files?.[0];
      if (isUndefined(file) || !file.size) {
        throw new Error(currentLang.errors.INVALID_FILE);
      }

      const fileExtension = getExtensionByFile(file);
      if (!isThreeDModelExtensionSupported(fileExtension)) {
        throw new Error(currentLang.errors.MODEL_FILE_EXTENSION_IS_NOT_SUPPORTED);
      }

      const loader = ThreeDModelFileLoaderFactory.create<FBXLoader | GLTFLoader>(fileExtension);
      const model = await loader.loadAsync(URL.createObjectURL(file), event =>
        setProgress(calculatePercentage(event.loaded, event.total)),
      );
      if (isEmpty(model.animations)) {
        throw new Error(currentLang.errors.MODEL_DOES_NOT_CONTAIN_ANIMATIONS);
      }

      setThreeDModel(model);
      setThreeDModelExtension(fileExtension as SupportedThreeDModelExtension);
      setAvailableAnimationList(getAvailableAnimationListByModel(model));

      resetError();
      goToNextStep();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message, 'error');
      }
    } finally {
      event.target.value = '';
      unblockUI();
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
        {currentLang.labels.UPLOAD_FILE_BTN}
      </Button>
      <Typography variant="body1" align="center">
        {interpolateStrings(currentLang.messages.SUPPORTED_FORMATS, String(supportedThreeDModelFormats))}
      </Typography>
    </MUIBox>
  );
};

export default FileUploader;
