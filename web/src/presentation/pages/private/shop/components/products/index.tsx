import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../../context/authContext'
import './productsShop.styles.sass'
import { IProduct } from '../../../../../../core/models/IProduct';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getAllProductsServiceLocator';

export const Products = () => {
    const { loading, setLoading } = useAuthContext();

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        setLoading(true);
        async function fetchProducts() {
            try {
                const response = await getAllProductsServiceLocator.getAllProductsUseCase.execute();
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products: ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();

    }, [])

    return (
        <div className="products_container">
            {products.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}
