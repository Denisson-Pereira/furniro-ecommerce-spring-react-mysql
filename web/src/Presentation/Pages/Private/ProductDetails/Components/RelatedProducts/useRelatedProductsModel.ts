import { useEffect, useState } from "react";
import { IProduct } from "../../../../../../Core/Models/IProduct";
import { productServiceLocator } from "../../../../../../Infra/Services/productServiceLocator";

export const useRelatedProductsModel = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        async function fetchProducts() {
            try {
                const response = await productServiceLocator.getAllProductsUseCase.execute("products");
                setProducts(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])

    return {
        products,
        loading
    }
}