import { ProductDetailComponentView } from "./ProductDetailComponentView";
import { useProductDetailComponentModel } from "./useProductDetailComponentModel"

interface Props {
    id: string | undefined
}

export const ProductDetailComponent: React.FC<Props> = ({ id }) => {
    const productDetailComponentModel = useProductDetailComponentModel(id);
    return (
        <>
            <ProductDetailComponentView {...productDetailComponentModel} />
        </>
    )
}