import { Footer, NavScroll } from '../../../components'
import { HeaderProfile, InfoProfile } from './components'

import './profile.styles.sass'

export const Profile = () => {
  return (
    <div className="profile_container">
      <NavScroll />
      <HeaderProfile />
      <InfoProfile />
      <Footer />
    </div>
  )
}
