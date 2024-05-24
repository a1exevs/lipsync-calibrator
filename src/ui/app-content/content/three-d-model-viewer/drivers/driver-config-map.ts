import { isUndefined } from 'src/common/helpers/guards';
import { Nillable } from 'src/common/types/common';
import {
  SupportedFileExtension,
  ThreeDModelViewerDriver,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import { fbxDriver } from 'src/ui/app-content/content/three-d-model-viewer/drivers/fbx-driver/fbx-driver';

const driverMap: Record<SupportedFileExtension, ThreeDModelViewerDriver> = {
  [SupportedFileExtension.FBX]: fbxDriver,
};

export function getDriverByFileExtension(extension: Nillable<string>) {
  const config = driverMap[extension as SupportedFileExtension];
  if (isUndefined(config)) {
    throw new Error(`The config for ${extension} was not found.`);
  }
  return config;
}
