import { Footer, HighQuality, NavScroll } from '../../../components'
import { ContactForm, GetInTouch, HeaderContact } from './components'
import './contact.styles.sass'

export const Contact = () => {
  return (
    <div className="contact_container">
      <NavScroll />
      <HeaderContact />
      <GetInTouch />
      <ContactForm />
      <HighQuality />
      <Footer />
    </div>
  )
}
