import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tasks from './locales/tasks.json';
import accessible from './locales/accessible.json';

const resources = {
	en: {
		translation: {
            ...tasks.en.translation,
            ...accessible.en.translation
 		},
	},

	it: {
		translation: {
          ...tasks.it.translation,
          ...accessible.it.translation
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
    fallbackLng: 'en',
	lng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
