import { useEffect, useState } from 'react'
import './relatedProducts.styles.sass'
import { IProduct } from '../../../../../../Core/Models/IProduct'
import { getAllProductsServiceLocator } from '../../../../../../Infra/Services/getProductsServiceLocator'
import { SpinnerComponent } from '../../../../../Components'
import { monetaryUnit } from '../../../../../../Shared/Utils/monetaryUnit/monetaryUnit'
import { promotionValue } from '../../../../../../Shared/Utils/promotionValue/promotionValue'
import { FaHeart } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { useFavoritiesContext } from '../../../../../Context/favoritiesContext'
import { useHandlePage } from '../../../../../Hooks/useHandlePage'
import { useNavigate } from 'react-router-dom'

export const RelatedProducts = () => {
    const navigate = useNavigate();
    const { isFavorite, addFavorite } = useFavoritiesContext();
    const handlePage = useHandlePage();
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        async function fetchProducts() {
            try {
                const response = await getAllProductsServiceLocator.getAllProductsUseCase.execute("products");
                setProducts(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])


    return (
        <div className="relatedProducts_container">
            <p>Related Products</p>
            {loading ? (
                <SpinnerComponent />
            ) : (
                <div className="relatedProducts_info_box">
                    {products.slice(0, 4).map((item) => (
                        <div
                            className="relatedProducts_cards"
                            key={item.id}
                        >
                            <img
                                src={item.image}
                                alt="image product"
                                title={item.name}
                                onClick={() => handlePage(item.id)}
                            />
                            <div className="relatedProducts_promotion">
                                <p>New</p>
                            </div>
                            <div className="relatedProducts_favorities_box">
                                {item ? (
                                    isFavorite(item) ? (
                                        <div
                                            className="relatedProducts_favorities_icon"
                                            onClick={() => addFavorite(item)}
                                        >
                                            <FaHeart />
                                        </div>
                                    ) : (
                                        <div
                                            className="relatedProducts_favorities_icon"
                                            onClick={() => addFavorite(item)}
                                        >
                                            <CiHeart />
                                        </div>
                                    )
                                ) : null}
                            </div>
                            <div 
                            className="relatedProducts_info"
                            onClick={() => handlePage(item.id)}
                            >
                                <p>{item.name}</p>
                                <span>Styllish cafe chair</span>
                                <div className="relatedProducts_info_price">
                                    <p>{monetaryUnit(item.price)}</p>
                                    <span>{monetaryUnit(promotionValue(20, item.price))}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div 
                className="relatedProducts_btn"
                onClick={() => navigate('/shop')}
            >
                <button>Show More</button>
            </div>
        </div>
    )
}
