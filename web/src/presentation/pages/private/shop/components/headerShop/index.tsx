import { Link } from 'react-router-dom'
import Logo from '../../../../../../assets/images/logo.png'

import './headerShop.styles.sass'

export const HeaderShop = () => {
  return (
    <div className="headerShop_container">
      <img src={Logo} alt="logo" />
      <p>Shop</p>
      <div className="headerShop_links">
        <Link className='headerShop_a' to={'/'}>Home</Link>
        <p>&gt;</p>
        <p>Shop</p>
      </div>
    </div>
  )
}
