import { Link } from 'react-router-dom'
import Logo from '../../../../../../assets/images/logo.png'

import './headerCart.styles.sass'

export const HeaderCart = () => {
    return (
        <div className="headerCart_container">
            <img src={Logo} alt="logo" />
            <p>Cart</p>
            <div className="cart_links">
                <Link className='cart_a' to={'/'}>Home</Link>
                <p>&gt;</p>
                <p>Cart</p>
            </div>
        </div>
    )
}
