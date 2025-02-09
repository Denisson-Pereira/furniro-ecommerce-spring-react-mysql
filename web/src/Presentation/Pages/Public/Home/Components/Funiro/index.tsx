import { useTranslation } from 'react-i18next'

import './Funiro.styles.sass'

export const Funiro = () => {
  const { t } = useTranslation();

  return (
    <div className="funiro_container">
        <div className="funiro_title">
            <p>{t("home.title4")}</p>
            <span>#FuniroFurniture</span>
        </div>
    </div>
  )
}
