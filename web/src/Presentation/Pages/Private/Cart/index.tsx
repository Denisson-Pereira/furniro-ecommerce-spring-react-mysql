import { Footer, HighQuality, NavScroll } from "../../../Components"
import { Check, HeaderCart } from "./Components"

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
