import { Footer, NavScroll } from '../../../Components'
import { Beautiful, Browse, Funiro, Header } from './Components'

export const Home = () => {
  return (
    <div className="home_container">
      <NavScroll />
      <Header />
      <Browse />
      <Beautiful />
      <Funiro />
      <Footer />
    </div>
  )
}
