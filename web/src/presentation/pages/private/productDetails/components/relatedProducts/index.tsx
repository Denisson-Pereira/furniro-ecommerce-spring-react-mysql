import { useEffect, useState } from 'react'
import './relatedProducts.styles.sass'
import { IProduct } from '../../../../../../core/models/IProduct'
import { TbArrowWaveLeftDown } from 'react-icons/tb'
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getProductsServiceLocator'
import { SpinnerComponent } from '../../../../../components'

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
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
            )}
        </div>
    )
}
