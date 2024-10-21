import React from "react";
import { useTranslation } from "react-i18next";

const Credits = () => {
    const {t} = useTranslation();

    return (
        <div className="credits">
        <h2>Task-Helper</h2>
        <p>{t('creditsText')}</p>
        </div>
    )
}

export default Credits;