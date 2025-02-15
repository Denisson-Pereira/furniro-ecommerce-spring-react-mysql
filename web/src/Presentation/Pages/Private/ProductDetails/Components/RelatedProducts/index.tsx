import { RelatedProductsView } from "./RelatedProductsView"
import { useRelatedProductsModel } from "./useRelatedProductsModel"

export const RelatedProducts = () => {
    const relatedProductsModel = useRelatedProductsModel()
    return (
        <>
            <RelatedProductsView {...relatedProductsModel} />
        </>
    )
}