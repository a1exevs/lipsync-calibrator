import { Group, Loader } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import { isUndefined } from 'src/common/helpers/guards';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

const ThreeDModelFileLoaderMap: Record<SupportedThreeDModelExtension, Loader<Group>> = {
  [SupportedThreeDModelExtension.FBX]: new FBXLoader(),
};

export class ThreeDModelFileLoaderFactory {
  static create(extension: string) {
    const loader = ThreeDModelFileLoaderMap[extension as SupportedThreeDModelExtension];
    if (isUndefined(loader)) {
      throw new Error(interpolateStrings(currentLang.errors.THREE_D_MODEL_LOADER_WAS_NOT_FOUND, extension ?? ''));
    }
    return loader;
  }
}
