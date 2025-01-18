import { useEffect, useState } from 'react'
import './relatedProducts.styles.sass'
import { IProduct } from '../../../../../../core/models/IProduct'
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getProductsServiceLocator'
import { SpinnerComponent } from '../../../../../components'
import { monetaryUnit } from '../../../../../../utils/monetaryUnit'
import { promotionValue } from '../../../../../../utils/promotionValue'

export const RelatedProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        async function fetchProducts() {
            try {
                const response = await getAllProductsServiceLocator.getAllProductsUseCase.execute();
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
            ): (
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
                            />
                            <div className="relatedProducts_promotion">
                                <p>New</p>
                            </div>
                            <div className="relatedProducts_info">
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
            <div className="relatedProducts_btn">
                <button>Show More</button>
            </div>
        </div>
    )
}
