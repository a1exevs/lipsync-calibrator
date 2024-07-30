import { languageCodes } from 'src/common/land/lang.consts';
import { jsonStructureExample } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.consts';

export type LanguageCode = (typeof languageCodes)[number];

const UPLOAD_JSON_EN = 'Upload JSON file';

const enLabels = {
  APP_NAME: 'Lipsync calibrator',
  UPLOAD_MODEL: 'Select model',
  UPLOAD_JSON: UPLOAD_JSON_EN,
  DOWNLOAD_JSON: 'Download JSON file',
  RESET: 'Reset',
  DURATION: 'Duration: {0} s',
  AVAILABLE_ANIMATIONS: 'Available animations',
  CONFIRMATION: 'Confirmation',
  NOTIFICATION: 'Notification',
  EXPAND_PLOT_PANEL: 'Expand Plot panel',
  COLLAPSE_PLOT_PANEL: 'Collapse Plot panel',
};

const enMessages = {
  THREE_D_MODEL_LOADED: `3D model (loaded - {0}%)`,
  SUPPORTED_FORMATS: `Supported formats: {0}.`,
  THIS_APP_FOR_CALIBRATE: `This application is for calibrating 3D model visemes.`,
  SELECT_THREE_D_FILE: `First, let's select the 3D model file you need.`,
  DOWNLOAD_JSON_NOT_AVAILABLE: '“Download JSON File” will be available after you import the JSON file.',
  NEW_ANIMATION_ADDING_FOR_PLOTS: "A new animation item named '{0}' has been added for working with plots.",
  UNSAVED_PLOT_CHANGES_IMPORT_CONFIRMATION:
    'You have some unsaved changes in the previous plots. Your changes will be discarded after clicking OK. Do you want to proceed with the new import?',
  MODEL_WITHOUT_MESH_OBJECTS:
    "Current model doesn't contain mesh-objects. Therefore, changes on the plot won't be synced with the model. Do you want to continue with the JSON-data import?",
  UNSAVED_PLOT_CHANGES_BACK_BUTTON_CONFIRMATION:
    'You have some unsaved changes in the current plots. Your changes will be discarded after clicking Back. Do you want to proceed to the previous page?',
  PLOT_PANEL_NO_DATA: `Use the '${UPLOAD_JSON_EN}' button to upload the data. Plots  for working with shapes will be displayed here.`,
  PLOT_PANEL_NOT_AVAILABLE: 'The plot panel will be available after you select the 3D model file you need.',
};

const enErrors = {
  THREE_D_MODEL_DRIVER_WAS_NOT_FOUND: `The driver for {0} was not found.`,
  THREE_D_MODEL_LOADER_WAS_NOT_FOUND: `The loader for {0} was not found.`,
  INVALID_FILE: 'The selected file is invalid.',
  MODEL_FILE_EXTENSION_IS_NOT_SUPPORTED: 'Sorry, the selected 3D model file extension is not supported.',
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
