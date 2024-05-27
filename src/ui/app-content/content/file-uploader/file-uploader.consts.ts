import { getSupportedThreeDModelExtensions } from 'src/ui/app-content/content/file-uploader/helpers/supported-three-d-model-extensions.helper';

export const supportedThreeDModelFormats = getSupportedThreeDModelExtensions().join(', ');

export const threeDModelFileUploaderAccept = getSupportedThreeDModelExtensions()
  .map(extension => `.${extension}`)
  .join(', ');
