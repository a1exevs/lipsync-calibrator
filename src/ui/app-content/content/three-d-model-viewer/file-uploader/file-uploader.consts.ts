import { getSupportedThreeDModelExtensions } from 'src/ui/app-content/content/three-d-model-viewer/file-uploader/helpers/supported-three-d-model-extensions.helper';

export const supportedThreeDModelFormats = getSupportedThreeDModelExtensions().join(', ');

export const threeDModelUploaderAccept = getSupportedThreeDModelExtensions()
  .map(extension => `.${extension}`)
  .join(', ');
