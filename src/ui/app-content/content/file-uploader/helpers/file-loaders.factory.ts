import { Loader } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { isUndefined } from 'src/common/helpers/guards';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

const ThreeDModelFileLoaderMap: Record<SupportedThreeDModelExtension, Loader> = {
  [SupportedThreeDModelExtension.FBX]: new FBXLoader(),
  [SupportedThreeDModelExtension.GLTF]: new GLTFLoader(),
};

export class ThreeDModelFileLoaderFactory {
  static create<T>(extension: string) {
    const loader = ThreeDModelFileLoaderMap[extension as SupportedThreeDModelExtension];
    if (isUndefined(loader)) {
      throw new Error(interpolateStrings(currentLang.errors.THREE_D_MODEL_LOADER_WAS_NOT_FOUND, extension ?? ''));
    }
    return loader as T;
  }
}
