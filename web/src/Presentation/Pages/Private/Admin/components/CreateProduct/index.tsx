import { CreateProductView } from "./CreateProductView";
import { useCreateProductModel } from "./useCreateProductModel"

export const CreateProduct = () => {
    const createProductModel = useCreateProductModel();
    return (
        <>
            <CreateProductView {...createProductModel} />
        </>
    )
}