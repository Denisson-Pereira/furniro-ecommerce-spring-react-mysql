import { Link } from 'react-router-dom'
import Logo from '../../../../../../assets/images/logo.png'

import './headerFavorities.styles.sass'

export const HeaderFavorities = () => {
  return (
    <div className="headerFavorities_container">
      <img src={Logo} alt="logo" />
      <p>Favorities</p>
      <div className="headerFavorities_links">
        <Link className='headerFavorities_a' to={'/'}>Home</Link>
        <p>&gt;</p>
        <p>Favorities</p>
      </div>
    </div>
  )
}
