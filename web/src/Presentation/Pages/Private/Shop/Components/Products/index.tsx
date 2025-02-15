import { ProductsView } from "./ProductsView"
import { useProductsModel } from "./useProductsModel"

export const Products = () => {
    const productsModel = useProductsModel()
    return (
        <>
            <ProductsView {...productsModel} />
        </>
    )
}