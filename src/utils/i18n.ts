import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import it from './locales/it.json';

const resources = {
	en: {
		translation: {
            ...en.en.translation
 		},
	},

	it: {
		translation: {
            ...it.it.translation
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
