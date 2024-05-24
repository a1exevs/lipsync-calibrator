import { languageCodes } from 'src/common/land/lang.consts';

export type LanguageCode = (typeof languageCodes)[number];

const enLabels = {
  APP_NAME: 'Lipsync calibrator',
};
const enMessages = {
  THREE_D_MODEL_LOADED: `3d model (loaded - {0}%)`,
  SUPPORTED_FORMATS: `Supported formats: {0}`,
  THIS_APP_FOR_CALIBRATE: `This application for calibrating visemes 3d models.`,
  SELECT_THREE_D_FILE: `First, let's select the 3D model file you need.`,
};

export type LanguageConstants = {
  labels: typeof enLabels;
  messages: typeof enMessages;
};

export type LocalizationData = Record<LanguageCode, LanguageConstants>;

export const lang: LocalizationData = {
  en: {
    labels: enLabels,
    messages: enMessages,
  },
};
