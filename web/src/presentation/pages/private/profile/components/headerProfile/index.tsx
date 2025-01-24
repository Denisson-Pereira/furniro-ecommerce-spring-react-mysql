import { Link } from 'react-router-dom'
import Logo from '../../../../../../assets/images/logo.png'

import './headerPrfole.styles.sass'
import { useAuthContext } from '../../../../../context/authContext'
import { capitalizeWord } from '../../../../../../utils/capitalizeWord'

export const HeaderProfile = () => {
  const { user } = useAuthContext();

  return (
    <div className="headerProfile_container">
      <img src={Logo} alt="logo" />
      <p>Profile</p>
      <div className="headerProfile_links">
        <Link className='headerProfile_a' to={'/'}>Home</Link>
        <p>&gt;</p>
        <p>{capitalizeWord(user.first_name)}'s profile</p>
      </div>
    </div>
  )
}
