import { languageCodes } from 'src/common/land/lang.consts';

export type LanguageCode = (typeof languageCodes)[number];

const enLabels = {
  APP_NAME: 'Lipsync calibrator',
};
const enMessages = {
  THREE_D_MODEL_LOADED: `3d model (loaded - {0}%)`,
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
