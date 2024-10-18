import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import it from './locales/it.json';

const resources = {
	en: en,
	it: it,
}

i18n.use(initReactI18next).init({
	resources,
	ns: [
		'common',
		'homepage',
		'accessible',
		'navbar',
		'credits',
		'error',
	],
	defaultNS: 'common',
	fallbackLng: 'en',
	lng: 'en',
	debug: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
