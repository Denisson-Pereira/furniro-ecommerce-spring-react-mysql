import { Link } from 'react-router-dom'
import Logo from '../../../../../../Assets/Images/logo.png'

import './headerCart.styles.sass'
import { useTranslation } from 'react-i18next'

export const HeaderCart = () => {
    const { t } = useTranslation();

    return (
        <div className="headerCart_container">
            <img src={Logo} alt="logo" />
            <p>{t("navbar.cart")}</p>
            <div className="cart_links">
                <Link className='cart_a' to={'/'}>{t("navbar.home")}</Link>
                <p>&gt;</p>
                <p>{t("navbar.cart")}</p>
            </div>
        </div>
    )
}
