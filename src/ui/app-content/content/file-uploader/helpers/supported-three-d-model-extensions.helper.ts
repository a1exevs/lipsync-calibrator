import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

export function getSupportedThreeDModelExtensions(): string[] {
  return Object.values(SupportedThreeDModelExtension);
}
