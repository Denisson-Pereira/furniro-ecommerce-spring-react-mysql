import { Info, ProductDetailComponent, RelatedProducts, TracoComponent } from "./Components"
import { Footer } from "../../../Components"
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="productsDetails_container">
      <ProductDetailComponent id={id} />
      <TracoComponent />
      <Info />
      <TracoComponent />
      <RelatedProducts />
      <Footer />
    </div>
  )
}
