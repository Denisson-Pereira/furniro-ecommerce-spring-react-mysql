import { Link } from 'react-router-dom'
import Logo from '../../../../../../Assets/Images/logo.png'
import { useTranslation } from 'react-i18next'

import './HeaderShop.styles.sass'

export const HeaderShop = () => {
  const { t } = useTranslation();
  return (
    <div className="headerShop_container">
      <img src={Logo} alt="logo" />
      <p>{t("navbar.shop")}</p>
      <div className="headerShop_links">
        <Link className='headerShop_a' to={'/'}>{t("navbar.home")}</Link>
        <p>&gt;</p>
        <p>{t("navbar.shop")}</p>
      </div>
    </div>
  )
}
