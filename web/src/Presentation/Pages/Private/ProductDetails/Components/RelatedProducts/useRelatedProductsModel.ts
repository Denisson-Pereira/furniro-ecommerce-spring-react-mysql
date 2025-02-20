import { useEffect, useState } from "react";
import { IProduct } from "../../../../../../Core/Models/IProduct";
import { GetAllProductsUseCase } from "../../../../../../Core/UseCases/GetAllProductsUseCase/GetAllProductsUseCase";
import { ProductRepositoryImpl } from "../../../../../../Infra/Repositories/ProductsRepositotyImpl";

export const useRelatedProductsModel = () => {
    const repository = new ProductRepositoryImpl();
    const getAllProductsUseCase = new GetAllProductsUseCase(repository);

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        async function fetchProducts() {
            try {
                const response = await getAllProductsUseCase.execute("products");
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