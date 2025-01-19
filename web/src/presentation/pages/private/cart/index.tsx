import { Footer, HighQuality, NavScroll } from "../../../components"
import { Check, HeaderCart } from "./components"


export const Cart = () => {
  return (
    <div className="cart_container">
        <NavScroll />
        <HeaderCart />
        <Check />
        <HighQuality />
        <Footer />
    </div>
  )
}
