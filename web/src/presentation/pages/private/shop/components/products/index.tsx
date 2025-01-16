import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../../context/authContext'
import { IProduct } from '../../../../../../core/models/IProduct';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getAllProductsServiceLocator';

import Grid from '../../../../../../assets/icons/grid.png';
import List from '../../../../../../assets/icons/list.png';

import './productsShop.styles.sass';
import { monetaryUnit } from '../../../../../../utils/monetaryUnit';
import { promotionValue } from '../../../../../../utils/promotionValue';
import { useHandlePage } from '../../../../../hooks/useHandlePage';
import { HighQuality } from '../../../../../components';

export const Products = () => {
    const { loading, setLoading } = useAuthContext();

    const [allProducts, setAllProducts] = useState<IProduct[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [size, setSize] = useState<string>('8'); 
    const [productsList, setProductsList] = useState<boolean>(false);
    const [pages, setPages] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selecFilter, setSelectFilter] = useState<string>('featured');

    const handlePage = useHandlePage();

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const response = await getAllProductsServiceLocator.getAllProductsUseCase.execute();
                setAllProducts(response);
                applyFilter(response, selecFilter); 
                const initialSize = parseInt(size);
                setPages(Array.from({ length: Math.ceil(response.length / initialSize) }, (_, index) => index + 1));
            } catch (error) {
                console.error('Error fetching products: ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [size]);

    useEffect(() => {
        applyFilter(allProducts, selecFilter);
    }, [selecFilter]);

    const applyFilter = (products: IProduct[], selecFilter: string) => {
        let filteredProducts = [...products];
        switch (selecFilter) {
            case 'featured':
                break; 
            case 'highest':
                filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
            case 'lowest':
                filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            default:
                console.log('Error when filtering products');
        }
        setProducts(filteredProducts);
    };

    useEffect(() => {
        const parsedSize = parseInt(size);
        if (!isNaN(parsedSize) && parsedSize > 0) {
            const newPages = Array.from(
                { length: Math.ceil(products.length / parsedSize) },
                (_, index) => index + 1
            );
            setPages(newPages);
            setCurrentPage(1);
        }
    }, [size, products]);

    const productsPerPage = parseInt(size) || 8;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const visibleProducts = products.slice(startIndex, endIndex);

    return (
        <div className="products_container">
            <div className="products_filter">
                <div className="products_box">
                    <select 
                        name="selec_filter" 
                        id="selec_filter"
                        value={selecFilter}
                        onChange={(e) => setSelectFilter(e.target.value)}
                        style={{ width: '15vh' }}
                    >
                        <option value="featured">Featured</option>
                        <option value="highest">Highest Price</option>
                        <option value="lowest">Lowest Price</option>
                    </select>
                    <div
                        className="products_filter_click"
                        onClick={() => setProductsList(false)}
                        title="grid format"
                    >
                        <img src={Grid} alt="grid" />
                    </div>
                    <div
                        className="products_filter_click"
                        onClick={() => setProductsList(true)}
                        title="format in lines"
                    >
                        <img src={List} alt="list" />
                    </div>
                    <div className="products_traco"></div>
                    <div className="products_p_list">
                        <p>
                            Showing {startIndex + 1}-
                            {Math.min(endIndex, products.length)} of {products.length} results
                        </p>
                    </div>
                </div>
                <div className="products_box">
                    <p>Show</p>
                    <div className="products_box_show">
                        <select
                            name="selec_qnt"
                            id="selec_qnt"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option value="8">8</option>
                            <option value="16">16</option>
                            <option value="32">32</option>
                        </select>
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="products_spinner"></div>
            ) : (
                <div className={productsList ? "products_map_row" : "products_map_column"}>
                    {visibleProducts.map((product) => (
                        <div
                            key={product.id}
                            className={productsList ? 'products_card_row' : 'products_card'}
                            onClick={() => handlePage(product.id)}
                        >
                            <img src={product.image} alt={product.name} />
                            <div className="products_promotion">
                                <p>-20%</p>
                            </div>
                            <div className={productsList ? "product_info_row" : "product_info"}>
                                <p>{product.name}</p>
                                <span>Styllish cafe chair</span>
                                <div
                                    className={
                                        productsList
                                            ? "product_info_price_row"
                                            : "product_info_price"
                                    }
                                >
                                    <p>{monetaryUnit(promotionValue(20, product.price))}</p>
                                    <span>{monetaryUnit(product.price)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="products_pagination">
                {pages.map((numero) => (
                    <div
                        key={numero}
                        className={`products_pagination_numbers ${
                            currentPage === numero ? 'active' : ''
                        }`}
                        onClick={() => setCurrentPage(numero)}
                    >
                        <p>{numero}</p>
                    </div>
                ))}
            </div>
            <HighQuality />
        </div>
    );
};
