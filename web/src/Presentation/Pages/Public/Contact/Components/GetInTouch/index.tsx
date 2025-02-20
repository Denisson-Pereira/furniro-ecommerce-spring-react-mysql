import { useTranslation } from 'react-i18next'

import './GetInTouch.styles.sass'

export const GetInTouch = () => {
  const { t } = useTranslation();
  return (
    <div className="getInTouch_container">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.description")}</p>
    </div>
  )
}
