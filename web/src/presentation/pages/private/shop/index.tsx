import { Footer, NavScroll } from '../../../components'
import { HeaderShop, Products } from './components'
import './shop.styles.sass'

export const Shop = () => {
  return (
    <div className="shop_container">
      <NavScroll />
      <HeaderShop />
      <Products />
      <Footer />
    </div>
  )
}
