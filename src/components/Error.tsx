import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const Error: React.FC = () => {
	const {t} = useTranslation('error');

	return (
		<>
			<Navbar />
			<div className="error-page">
				<h1>{t('errorOccurred')}</h1>
				<p>{t('errorSorry')}</p>
			</div>
			<Footer />
		</>
	);
};

export default Error;
