import { Footer, NavScroll } from '../../../Components'
import { HeaderProfile, InfoProfile } from './components'

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
