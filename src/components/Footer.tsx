import React from "react";
import { useTranslation } from "react-i18next";

function Footer () {
    const {t} = useTranslation();

    return (
        <footer className="footer">
        <p className="footer__text">{t('footerCredits')}</p>
    </footer>
    )
}

export default Footer;