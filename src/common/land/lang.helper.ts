import { lang, LanguageCode, LanguageConstants } from 'src/common/land/lang';

const defaultLang: LanguageCode = 'en';

export const currentLang: LanguageConstants = lang[defaultLang];
