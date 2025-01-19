import { Footer, HighQuality, NavScroll } from "../../../components"
import { HeaderCart } from "./components"


export const Cart = () => {
  return (
    <div className="cart_container">
        <NavScroll />
        <HeaderCart />
        <HighQuality />
        <Footer />
    </div>
  )
}
