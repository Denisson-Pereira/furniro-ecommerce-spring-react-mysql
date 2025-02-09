import { Footer, HighQuality, NavScroll } from "../../../Components"
import { DiningProducts } from "./Components"

export const Dining = () => {
  return (
    <div className="dining_container">
        <NavScroll />
        <DiningProducts />
        <HighQuality />
        <Footer />
    </div>
  )
}
