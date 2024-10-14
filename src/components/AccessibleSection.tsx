import React from "react";
import image1 from '../assets/image1.jpg';
import { useTranslation } from 'react-i18next';

const AccessibleSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <article>
            <h2>{t('accessibleText')}</h2>
            <figure>
                <img src={image1} alt={t('greenHillCaption')}></img>
                <figcaption>{t('greenHillCaption')}</figcaption>
            </figure>

            <address>
                <p>{t('contactEmail')}</p>
                <p>{t('address')}</p>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    {t('googleLink')}
                </a>
            </address>

            <h2>{t('myStudies')}</h2>
            <ul>
                <li>
                    {t('masterDegree')}
                    <ul>
                        <li>{t('internshipSaronno')}</li>
                        <li>{t('masterThesis')}</li>
                    </ul>
                </li>

                <li>
                    {t('bachelorDegree')}
                    <ul>
                        <li>{t('internship')}</li>
                        <li>{t('bachelorThesis')}</li>
                    </ul>
                </li>
            </ul>
        </article>
    );
};

export default AccessibleSection;
