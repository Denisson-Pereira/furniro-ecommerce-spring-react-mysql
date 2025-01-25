import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './productsCategories.styles.sass';
import { useAuthContext } from '../../../../../context/authContext';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getProductsServiceLocator';
import { IProduct } from '../../../../../../core/models/IProduct';
import { useFavoritiesContext } from '../../../../../context/favoritiesContext';
import { FaHeart } from 'react-icons/fa';
import { monetaryUnit } from '../../../../../../utils/monetaryUnit';
import { promotionValue } from '../../../../../../utils/promotionValue';
import { useHandlePage } from '../../../../../hooks/useHandlePage';
import { CiHeart } from 'react-icons/ci';

export const ProductsCategories = () => {
    const { category } = useParams();
    const handlePage = useHandlePage();
    const { loading, setLoading } = useAuthContext();
    const { addFavorite, isFavorite} = useFavoritiesContext();

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
        <div className="productsCategories_container">
            {loading ? (
                <div className="productsCategories_spinner"></div>
            ) : filteredProducts.length > 0 ? (
                <div className="productsCategories_box">
                    {filteredProducts.map(product => (
                        <div
                            className="productsCategories_card"
                            key={product.id}
                        >
                            <img
                                src={product.image}
                                alt="img"
                                onClick={() => handlePage(product.id)}
                            />
                            <div className="productsCategories_favorities_box">
                                {isFavorite(product) ? (
                                    <div
                                    className="productsCategories_icon"
                                    onClick={() => addFavorite(product)}
                                >
                                    <FaHeart />
                                </div>
                                ) : (
                                    <div 
                                        className="productsCategor_favorities_icon"
                                        onClick={() => addFavorite(product)}
                                    >
                                        <CiHeart />
                                    </div>
                                )}
                            </div>
                            <div
                                className="productsCategories_info"
                                onClick={() => addFavorite(product)}
                            >
                                <p>{product.name}</p>
                                <span>Styllish cafe chair</span>
                                <div className="productsCategories_info_price">
                                    <p>{monetaryUnit(product.price)}</p>
                                    <span>{monetaryUnit(promotionValue(20, product.price))}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
};
