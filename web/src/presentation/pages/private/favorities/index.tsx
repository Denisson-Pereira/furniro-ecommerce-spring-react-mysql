import { Footer, HighQuality, NavScroll } from '../../../components'
import { FavoritiesProducts, HeaderFavorities, SearchFavorities } from './components'
import './favorities.styles.sass'

export const Favorities = () => {
  return (
    <div className="favorities_container">
        <NavScroll />
        <HeaderFavorities />
        <SearchFavorities />
        <FavoritiesProducts />
        <HighQuality />
        <Footer />
    </div>
  )
}
