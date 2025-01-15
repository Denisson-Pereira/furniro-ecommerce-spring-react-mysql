import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../../context/authContext'
import { IProduct } from '../../../../../../core/models/IProduct';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getAllProductsServiceLocator';
import Filter from '../../../../../../assets/icons/filter.png'
import Grid from '../../../../../../assets/icons/grid.png'
import List from '../../../../../../assets/icons/list.png'

import './productsShop.styles.sass'

export const Products = () => {
    const { loading, setLoading } = useAuthContext();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [filter, setFilter] = useState<IProduct[]>([]);
    const [size, setSize] = useState<string>('8');

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

    const handleFilter = (size: number) => {
        const date = products.slice(0, size -1)
        setFilter(date);
    }

    return (
        <div className="products_container">
            <div className="products_filter">
                <div className="products_box">
                    <div className="products_filter">
                        <img src={Filter} alt="filter" />
                    </div>
                    <p>Filter</p>
                    <div className="products_filter">
                        <img src={Grid} alt="grid" />
                    </div>
                    <div className="products_filter">
                        <img src={List} alt="list" />
                    </div>
                    <div className="products_traco"></div>
                    <div className="products_p_list">
                        <p>Showing 1-16 of 32 results</p>
                    </div>
                </div>
                <div className="products_box">
                    <p>Show</p>
                    <div className="products_box_show">
                        <input 
                            type="number" 
                            name='filter_input'
                            id='filter_input'
                            value={size}
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
                <div className="products_map">
                    {filter.map((product) => (
                        <div key={product.id}>{product.name}</div>
                    ))}
                </div>
            )}
        </div>
    )
}
