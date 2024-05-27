import { getSupportedThreeDModelExtensions } from 'src/ui/app-content/content/file-uploader/helpers/supported-three-d-model-extensions.helper';

export const supportedFormats = getSupportedThreeDModelExtensions().join(', ');
