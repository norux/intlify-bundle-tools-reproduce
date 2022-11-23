import * as VueI18n from 'vue-i18n';

import en from './locales/en.json';

export default VueI18n.createI18n({
  locale: navigator.language,
  messages: {
    en,
  },
  fallbackLocale: {
    default: ['en'],
  },
});
