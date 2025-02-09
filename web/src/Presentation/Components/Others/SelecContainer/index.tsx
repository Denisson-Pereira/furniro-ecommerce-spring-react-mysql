import { useTranslation } from 'react-i18next';

import './selecContainer.styles.sass'

export const SelecContainer = () => {
    const { i18n } = useTranslation();

    return (
        <div className="selecContainer_container">
            <select
                name="selecLanguage"
                id="selecLiguage"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
                <option value="en">EN 🇺🇸</option>
                <option value="pt">PT 🇧🇷</option>
                <option value="es">ES 🇪🇸</option>
                <option value="fr">FR 🇫🇷</option>
                <option value="de">DE 🇩🇪</option>
                <option value="ja">JA 🇯🇵</option>
                <option value="zh">ZH 🇨🇳</option>
            </select>
        </div>
    )
}
