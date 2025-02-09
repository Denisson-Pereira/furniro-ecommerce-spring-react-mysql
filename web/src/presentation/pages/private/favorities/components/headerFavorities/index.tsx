import { Link } from 'react-router-dom'
import Logo from '../../../../../../assets/images/logo.png'

import './headerFavorities.styles.sass'
import { useTranslation } from 'react-i18next'

export const HeaderFavorities = () => {
  const { t } = useTranslation();

  return (
    <div className="headerFavorities_container">
      <img src={Logo} alt="logo" />
      <p>{t("navbar.favorities")}</p>
      <div className="headerFavorities_links">
        <Link className='headerFavorities_a' to={'/'}>{t("navbar.home")}</Link>
        <p>&gt;</p>
        <p>{t("navbar.favorities")}</p>
      </div>
    </div>
  )
}
