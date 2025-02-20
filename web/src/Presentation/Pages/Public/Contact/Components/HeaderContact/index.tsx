import { Link } from 'react-router-dom'
import Logo from '../../../../../../Assets/Images/logo.png'
import { useTranslation } from 'react-i18next'

import './HeaderContact.styles.sass'

export const HeaderContact = () => {
  const { t } = useTranslation();

  return (
    <div className="readerContact_container">
      <img src={Logo} alt="logo" />
      <p>{t("contact.contact")}</p>
      <div className="readerContact_links">
        <Link className='readerContact_a' to={'/'}>{t("navbar.home")}</Link>
        <p>&gt;</p>
        <p>{t("contact.contact")}</p>
      </div>
    </div>
  )
}
