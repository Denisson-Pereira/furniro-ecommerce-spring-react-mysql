import { Link } from 'react-router-dom'
import Logo from '../../../../../../Assets/Images/logo.png'
import './headerPrfole.styles.sass'
import { useAuthContext } from '../../../../../Context/authContext'
import { capitalizeWord } from '../../../../../../Shared/Utils/capitalizeWord/capitalizeWord'
import { useTranslation } from 'react-i18next'

export const HeaderProfile = () => {
  const { user } = useAuthContext();
  const { t } = useTranslation();

  return (
    <div className="headerProfile_container">
      <img src={Logo} alt="logo" />
      <p>{t("navbar.profile")}</p>
      <div className="headerProfile_links">
        <Link className='headerProfile_a' to={'/'}>{t("navbar.home")}</Link>
        <p>&gt;</p>
        <p>{capitalizeWord(user.first_name)}'s {t("navbar.profile")}</p>
      </div>
    </div>
  )
}
