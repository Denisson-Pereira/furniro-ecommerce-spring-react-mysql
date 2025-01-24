import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './productsCategories.styles.sass';
import { useAuthContext } from '../../../../../context/authContext';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getProductsServiceLocator';
import { IProduct } from '../../../../../../core/models/IProduct';
import { useFavoritiesContext } from '../../../../../context/favoritiesContext';

export const ProductsCategories = () => {
    const { category } = useParams();
    const { loading, setLoading } = useAuthContext();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const response = await getAllProductsServiceLocator.getAllProductsUseCase.execute();
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        if (category) {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    }, [category, products]);

    return (
        <div className="categories-container">
            {loading ? (
                <div className="spinner">Loading...</div>
            ) : filteredProducts.length > 0 ? (
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div></div>
                    ))}
                </div>
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
};
