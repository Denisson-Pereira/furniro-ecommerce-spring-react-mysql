import { ProductsCategoriesView } from "./ProductsCategoriesView"
import { useProductsCategoriesModel } from "./useProductsCategoriesModel"

export const ProductsCategories = () => {
    const productsCategoriesModel = useProductsCategoriesModel()
    return (
        <>
            <ProductsCategoriesView {...productsCategoriesModel} />
        </>
    )
}