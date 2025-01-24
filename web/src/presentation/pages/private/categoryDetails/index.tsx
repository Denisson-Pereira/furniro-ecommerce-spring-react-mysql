import { Footer, HighQuality, NavScroll } from "../../../components"
import { ProductsCategories } from "./components"


export const CategoryDetails = () => {
  return (
    <div className="cateogryDetails_container">
        <NavScroll />
        <ProductsCategories />
        <HighQuality />
        <Footer />
    </div>
  )
}
