import { useEffect, useState } from "react";
import { IProduct } from "../../../../../../Core/Models/IProduct";
import { productServiceLocator } from "../../../../../../Infra/Services/productServiceLocator";

export const useProductsCategoriesModel = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const response = await productServiceLocator.getAllProductsUseCase.execute("products");
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