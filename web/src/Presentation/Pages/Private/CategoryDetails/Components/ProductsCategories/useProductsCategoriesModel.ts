import { useEffect, useState } from "react";
import { IProduct } from "../../../../../../Core/Models/IProduct";
import { GetProductRepositoryImpl } from "../../../../../../Infra/Repositories/GetProductsRepositotyImpl";
import { GetAllProductsUseCase } from "../../../../../../Core/UseCases/GetAllProductsUseCase/GetAllProductsUseCase";

export const useProductsCategoriesModel = () => {
    const repository = new GetProductRepositoryImpl();
    const getAllProductsUseCase = new GetAllProductsUseCase(repository);

    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const response = await getAllProductsUseCase.execute("products");
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return {
        loading,
        products, 
        filteredProducts, 
        setFilteredProducts
    }
}