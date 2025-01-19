import { Footer, HighQuality, NavScroll } from '../../../components'
import { FavoritiesProducts, HeaderFavorities } from './components'
import './favorities.styles.sass'

export const Favorities = () => {
  return (
    <div className="favorities_container">
        <NavScroll />
        <HeaderFavorities />
        <FavoritiesProducts />
        <HighQuality />
        <Footer />
    </div>
  )
}
