import { NavScroll } from '../../../components'
import { Header } from './components'
import './home.styles.sass'

export const Home = () => {
  return (
    <div className="home_container">
      <NavScroll />
      <Header />
    </div>
  )
}
