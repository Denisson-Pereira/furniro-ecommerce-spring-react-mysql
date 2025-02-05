import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './productsCategories.styles.sass';
import { useAuthContext } from '../../../../../context/authContext';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getProductsServiceLocator';
import { IProduct } from '../../../../../../core/models/IProduct';
import { useFavoritiesContext } from '../../../../../context/favoritiesContext';
import { FaHeart } from 'react-icons/fa';
import { monetaryUnit } from '../../../../../../shared/utils/monetaryUnit/monetaryUnit';
import { promotionValue } from '../../../../../../shared/utils/promotionValue/promotionValue';
import { useHandlePage } from '../../../../../hooks/useHandlePage';
import { CiHeart } from 'react-icons/ci';

export const ProductsCategories = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const handlePage = useHandlePage();
    const { loading, setLoading } = useAuthContext();
    const { addFavorite, isFavorite } = useFavoritiesContext();

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
        <div className="productsCategories_container_component">
            {loading ? (
                <div className="productsCategories_spinner_component"></div>
            ) : filteredProducts.length > 0 ? (
                <div className="productsCateogira_products_box_component">
                    <div className="productsCategories_box_component">
                        {filteredProducts.map(product => (
                            <div
                                className="productsCategories_card_component"
                                key={product.id}
                            >
                                <img
                                    src={product.image}
                                    alt="img"
                                    onClick={() => handlePage(product.id)}
                                />
                                <div className="productsCategories_favorities_box_component">
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
                                    className="productsCategories_info_component"
                                    onClick={() => addFavorite(product)}
                                >
                                    <p>{product.name}</p>
                                    <span>Styllish cafe chair</span>
                                    <div className="productsCategories_info_price_component">
                                        <p>{monetaryUnit(product.price)}</p>
                                        <span>{monetaryUnit(promotionValue(20, product.price))}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div 
                        className="relatedProducts_btn_component"
                        onClick={() => navigate('/shop')}
                    >
                        <button>Show More</button>
                    </div>
                </div>
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
};
