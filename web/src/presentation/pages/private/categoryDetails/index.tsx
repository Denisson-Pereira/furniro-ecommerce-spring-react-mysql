import { Footer, HighQuality, NavScroll } from "../../../components"
import { HeaderCategory, ProductsCategories } from "./components"

export const CategoryDetails = () => {
  return (
    <div className="cateogryDetails_container">
        <NavScroll />
        <HeaderCategory />
        <ProductsCategories />
        <HighQuality />
        <Footer />
    </div>
  )
}
