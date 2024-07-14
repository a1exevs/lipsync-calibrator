import { languageCodes } from 'src/common/land/lang.consts';
import { jsonStructureExample } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.consts';

export type LanguageCode = (typeof languageCodes)[number];

const enLabels = {
  APP_NAME: 'Lipsync calibrator',
  UPLOAD_MODEL: 'Select model',
  UPLOAD_JSON: 'Upload JSON file',
  DOWNLOAD_JSON: 'Download JSON file',
  BACK_BTN: 'BACK',
  DURATION: 'Duration: {0} s',
  AVAILABLE_ANIMATIONS: 'Available animations',
};
const enMessages = {
  THREE_D_MODEL_LOADED: `3D model (loaded - {0}%)`,
  SUPPORTED_FORMATS: `Supported formats: {0}.`,
  THIS_APP_FOR_CALIBRATE: `This application is for calibrating 3D model visemes.`,
  SELECT_THREE_D_FILE: `First, let's select the 3D model file you need.`,
  DOWNLOAD_JSON_NOT_AVAILABLE: '“Download JSON File” will be available after you import the JSON file.',
};

const enErrors = {
  THREE_D_MODEL_DRIVER_WAS_NOT_FOUND: `The driver for {0} was not found.`,
  THREE_D_MODEL_LOADER_WAS_NOT_FOUND: `The loader for {0} was not found.`,
  INVALID_FILE: 'The selected file is invalid.',
  MODEL_FILE_EXTENSION_IS_NOT_SUPPORTED: 'Sorry, the selected 3D model file extension is not supported.',
  MODEL_DOES_NOT_CONTAIN_ANIMATIONS:
    "The selected 3D model doesn't contain animations. Please try selecting another 3D model.",
  SELECTED_FILE_IS_NOT_JSON: 'Invalid file: Please choose a file with a .json extension.',
  ERROR_LOADING_JSON:
    'Error loading JSON file: Please ensure the file has a valid .json extension and is formatted correctly.',
  INCORRECT_JSON_FILE_STRUCTURE: `JSON file does not comply with the required structure. Example: ${JSON.stringify(jsonStructureExample)}.`,
  ERRORS: 'Errors: {0}.',
};

export type LanguageConstants = {
  labels: typeof enLabels;
  messages: typeof enMessages;
  errors: typeof enErrors;
};

export type LocalizationData = Record<LanguageCode, LanguageConstants>;

export const lang: LocalizationData = {
  en: {
    labels: enLabels,
    messages: enMessages,
    errors: enErrors,
  },
};
