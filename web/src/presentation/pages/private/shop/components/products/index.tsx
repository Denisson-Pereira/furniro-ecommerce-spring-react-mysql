import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../../context/authContext'
import { IProduct } from '../../../../../../core/models/IProduct';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getAllProductsServiceLocator';

import Grid from '../../../../../../assets/icons/grid.png'
import List from '../../../../../../assets/icons/list.png'

import './productsShop.styles.sass'
import { monetaryUnit } from '../../../../../../utils/monetaryUnit';
import { promotionValue } from '../../../../../../utils/promotionValue';

export const Products = () => {
    const { loading, setLoading } = useAuthContext();

    const [products, setProducts] = useState<IProduct[]>([]);
    const filterStart = products.slice(0, 7);
    const [filter, setFilter] = useState<IProduct[]>(filterStart);
    const [size, setSize] = useState<string>('');
    const [productsList, setProductsList] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        async function fetchProducts() {
            try {
                const response = await getAllProductsServiceLocator.getAllProductsUseCase.execute();
                setProducts(response);
                setFilter(response.slice(0, 8));
            } catch (error) {
                console.error('Error fetching products: ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();

    }, [])

    const handleFilter = (size: number) => {
        const date = products.slice(0, size)
        setFilter(date);
    }

    return (
        <div className="products_container">
            <div className="products_filter">
                <div className="products_box">
                    <p>Filter</p>
                    <div
                        className="products_filter_click"
                        onClick={() => setProductsList(false)}
                        title='grid format'
                    >
                        <img src={Grid} alt="grid" />
                    </div>
                    <div
                        className="products_filter_click"
                        onClick={() => setProductsList(true)}
                        title='format in lines'
                    >
                        <img src={List} alt="list" />
                    </div>
                    <div className="products_traco"></div>
                    <div className="products_p_list">
                        <p>Showing 1-{filter.length} of {products.length} results</p>
                    </div>
                </div>
                <div className="products_box">
                    <p>Show</p>
                    <div className="products_box_show">
                        <input
                            type="text"
                            name='filter_input'
                            id='filter_input'
                            value={size}
                            placeholder='8'
                            onChange={(e) => setSize(e.target.value)}
                        />
                    </div>
                    <div className="products_box_show_default">
                        <button onClick={() => handleFilter(parseInt(size))}>Apply</button>
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="products_spinner"></div>
            ) : (
                <div className={productsList ? "products_map_row" : "products_map_column"}>
                    {filter.map((product) => (
                        <div key={product.id} className={productsList ? 'products_card_row' : 'products_card'}>
                            <img src={product.image} />
                            <div className="products_promotion">
                                <p>-20%</p>
                            </div>
                            <div className={productsList ? "product_info_row" : "product_info"}>
                                <p>{product.name}</p>
                                <span>Styllish cafe chair</span>
                                <div className={productsList ? "product_info_price_row" : "product_info_price"}>
                                    <p>{monetaryUnit(promotionValue(20, product.price))}</p>
                                    <span>{monetaryUnit(product.price)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
