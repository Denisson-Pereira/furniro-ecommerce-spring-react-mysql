import { useAuthContext } from '../../../../../Context/authContext'
import Logo from '../../../../../../Assets/Images/logo.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { capitalizeWord } from '../../../../../../Shared/Utils';

import './HeaderAdmin.styles.sass'

export const HeaderAdmin = () => {
    const { user } = useAuthContext();
    const { t } = useTranslation();

  return (
    <div className="headerAdmin_container">
        <img src={Logo} alt="logo" />
        <p>{t("profile.adm")}</p>
        <div className="headerAdmin_lilnks">
            <Link className='headerAdmin_a' to={'/'}>{t("navbar.home")}</Link>
            <p>&gt;</p>
            <p>{capitalizeWord(user.first_name)}'s {t("navbar.profile")}</p>
        </div>
    </div>
  )
}
