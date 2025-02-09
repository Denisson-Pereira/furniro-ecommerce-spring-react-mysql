import { Footer, HighQuality, NavScroll } from "../../../Components"
import { HeaderCategory, ProductsCategories } from "./Components"

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
