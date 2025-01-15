import { useNavigate } from 'react-router-dom'
import Logo from '../../../../../../assets/logo.png'

import './headerShop.styles.sass'

export const HeaderShop = () => {
  const navigate = useNavigate();

  return (
    <div className="headerShop_container">
      <img src={Logo} alt="logo" />
      <p>Shop</p>
      <div className="headerShop_links">
        <a onClick={() => navigate('/')} className='headerShop_a' >Home</a>
        <p>&gt;</p>
        <p>Shop</p>
      </div>
    </div>
  )
}
