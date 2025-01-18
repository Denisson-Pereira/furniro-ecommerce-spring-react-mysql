import { Link } from 'react-router-dom'
import Logo from '../../../../../../assets/images/logo.png'

import './headerContact.styles.sass'

export const HeaderContact = () => {

  return (
    <div className="readerContact_container">
      <img src={Logo} alt="logo" />
      <p>Contact</p>
      <div className="readerContact_links">
        <Link className='readerContact_a' to={'/'}>Home</Link>
        <p>&gt;</p>
        <p>Contact</p>
      </div>
    </div>
  )
}
