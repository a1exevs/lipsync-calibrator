import { languageCodes } from 'src/common/land/lang.consts';

export type LanguageCode = (typeof languageCodes)[number];

const enLabels = {
  APP_NAME: 'Lipsync calibrator',
  UPLOAD_FILE_BTN: 'Select model',
};
const enMessages = {
  THREE_D_MODEL_LOADED: `3D model (loaded - {0}%)`,
  SUPPORTED_FORMATS: `Supported formats: {0}.`,
  THIS_APP_FOR_CALIBRATE: `This application is for calibrating 3D model visemes.`,
  SELECT_THREE_D_FILE: `First, let's select the 3D model file you need.`,
};

const enErrors = {
  THREE_D_MODEL_DRIVER_WAS_NOT_FOUND: `The driver for {0} was not found.`,
  NO_AVAILABLE_ANIMATIONS: 'The current 3D model has no available animations.',
  NO_SELECTED_ANIMATION: 'The current 3D model does not contain the selected animation.',
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
