import { Footer, HighQuality, NavScroll } from "../../../components"
import { DiningProducts } from "./components"

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
