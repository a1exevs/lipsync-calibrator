import { isUndefined } from 'src/common/helpers/guards';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nillable } from 'src/common/types/common';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
  ThreeDModelViewerDriver,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import { fbxDriver } from 'src/ui/app-content/content/three-d-model-viewer/drivers/fbx-driver/fbx-driver';
import { gltfDriver } from 'src/ui/app-content/content/three-d-model-viewer/drivers/gltf-driver/gltf-driver';

const driverMap = {
  [SupportedThreeDModelExtension.FBX]: fbxDriver,
  [SupportedThreeDModelExtension.GLTF]: gltfDriver,
};

export function getDriverByFileExtension<T = ThreeDModel>(extension: Nillable<string>): ThreeDModelViewerDriver<T> {
  const config = driverMap[extension as SupportedThreeDModelExtension] as unknown as ThreeDModelViewerDriver<T>;
  if (isUndefined(config)) {
    throw new Error(interpolateStrings(currentLang.errors.THREE_D_MODEL_DRIVER_WAS_NOT_FOUND, extension ?? ''));
  }
  return config;
}
