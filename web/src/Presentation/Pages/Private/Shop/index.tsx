import { Footer, NavScroll } from '../../../Components'
import { HeaderShop, Products } from './Components'

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
