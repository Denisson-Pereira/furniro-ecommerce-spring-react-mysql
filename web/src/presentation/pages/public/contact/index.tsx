import { NavScroll } from '../../../components'
import { GetInTouch, HeaderContact } from './components'
import './contact.styles.sass'

export const Contact = () => {
  return (
    <div className="contact_container">
      <NavScroll />
      <HeaderContact />
      <GetInTouch />
    </div>
  )
}
