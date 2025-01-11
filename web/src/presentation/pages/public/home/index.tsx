import { NavScroll } from '../../../components'
import { Browse, Header } from './components'
import './home.styles.sass'

export const Home = () => {
  return (
    <div className="home_container">
      <NavScroll />
      <Header />
      <Browse />
    </div>
  )
}
