import { Footer, HighQuality, NavScroll } from '../../../Components'
import { ContactForm, GetInTouch, HeaderContact } from './Components'

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
