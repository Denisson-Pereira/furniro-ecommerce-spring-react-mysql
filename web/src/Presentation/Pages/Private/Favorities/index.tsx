import { Footer, HighQuality, NavScroll } from '../../../Components'
import { FavoritiesProducts, HeaderFavorities, SearchFavorities } from './Components'

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
