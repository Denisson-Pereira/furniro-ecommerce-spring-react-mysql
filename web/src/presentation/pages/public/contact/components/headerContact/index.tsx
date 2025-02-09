import { Link } from 'react-router-dom'
import Logo from '../../../../../../assets/images/logo.png'

import './headerContact.styles.sass'
import { useTranslation } from 'react-i18next'

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
