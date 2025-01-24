import { NavScroll } from '../../../components'
import { HeaderProfile } from './components'

import './profile.styles.sass'

export const Profile = () => {
  return (
    <div className="profile_container">
      <NavScroll />
      <HeaderProfile />
    </div>
  )
}
