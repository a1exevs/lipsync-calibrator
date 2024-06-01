import { isUndefined } from 'src/common/helpers/guards';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nillable } from 'src/common/types/common';
import {
  SupportedThreeDModelExtension,
  ThreeDModelViewerDriver,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import { fbxDriver } from 'src/ui/app-content/content/three-d-model-viewer/drivers/fbx-driver/fbx-driver';

const driverMap: Record<SupportedThreeDModelExtension, ThreeDModelViewerDriver> = {
  [SupportedThreeDModelExtension.FBX]: fbxDriver,
};

export function getDriverByFileExtension(extension: Nillable<string>) {
  const config = driverMap[extension as SupportedThreeDModelExtension];
  if (isUndefined(config)) {
    throw new Error(interpolateStrings(currentLang.errors.THREE_D_MODEL_DRIVER_WAS_NOT_FOUND, extension ?? ''));
  }
  return config;
}
