import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

export function getSupportedThreeDModelExtensions(): string[] {
  return Object.values(SupportedThreeDModelExtension);
}

export function isThreeDModelExtensionSupported(fileExtension: string): boolean {
  return getSupportedThreeDModelExtensions().includes(fileExtension);
}
