import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../../context/authContext'
import { IProduct } from '../../../../../../core/models/IProduct';
import { monetaryUnit } from '../../../../../../shared/utils/monetaryUnit';
import { promotionValue } from '../../../../../../shared/utils/promotionValue';
import { useHandlePage } from '../../../../../hooks/useHandlePage';
import { HighQuality } from '../../../../../components';
import { getAllProductsServiceLocator } from '../../../../../../infra/services/getProductsServiceLocator';
import Grid from '../../../../../../assets/icons/grid.png';
import List from '../../../../../../assets/icons/list.png';
import { FaHeart } from "react-icons/fa";
import './productsShop.styles.sass';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { useFavoritiesContext } from '../../../../../context/favoritiesContext';
import { FiltersProductsEnums } from '../../../../../../shared/enums/filtersProductsEnums';

export const Products = () => {
    const { loading, setLoading } = useAuthContext();
    const { isFavorite, addFavorite } = useFavoritiesContext();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [size, setSize] = useState<string>('8');
    const [productsList, setProductsList] = useState<boolean>(false);
    const [pages, setPages] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selecFilter, setSelectFilter] = useState<string>('featured');

    const [productsSearch, setProductsSearch] = useState<IProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handlePage = useHandlePage();

    useEffect(() => {
        setLoading(true);
        async function fetchProducts() {
            try {
                const response = await getAllProductsServiceLocator.getAllProductsUseCase.execute();
                switch (selecFilter) {
                    case FiltersProductsEnums.featured:
                        setProducts(response);
                        break;
                    case FiltersProductsEnums.highest:
                        setProducts(response.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
                        break;
                    case FiltersProductsEnums.lowest:
                        setProducts(response.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
                        break;
                    default:
                        console.log('Error when filtering products');
                }
                const initialSize = parseInt(size);
                setPages(Array.from({ length: Math.ceil(response.length / initialSize) }, (_, index) => index + 1));
            } catch (error) {
                console.error('Error fetching products: ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [selecFilter]);

    useEffect(() => {
        if (searchTerm === "") {
            setProductsSearch([]);
        } else {
            setProductsSearch(
                products.filter(products =>
                    products.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())

                )
            );
        }
    }, [searchTerm, products])

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
            <div className="products_search_container">
                <div className="products_search">
                    <CiSearch />
                    <input
                        type="text"
                        name='input_search'
                        id='input_search'
                        placeholder='Search products'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="products_search_response">
                    {searchTerm !== "" && productsSearch.length > 0 ? (
                        productsSearch.map((item) => (
                            <div
                                className="products_search_info_box"
                                key={item.id}
                                onClick={() => handlePage(item.id)}
                            >
                                <img
                                    src={item.image}
                                    alt="img_search"
                                    title={item.name}
                                />
                                <div className="products_search_info">
                                    <div className="products_search_txt_1">
                                        <p>{item.name}</p>
                                        <span>{monetaryUnit(item.price)}</span>
                                    </div>
                                    <div className="products_search_txt_2">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        searchTerm !== "" && <p id='products_not_fount'>Product not found</p>
                    )}
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
                        >
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                onClick={() => handlePage(product.id)}
                            />
                            <div className="products_promotion">
                                <p>-20%</p>
                            </div>
                            <div className="products_favorities">
                                {isFavorite(product) ? (
                                    <div 
                                        className="products_favorities_icon"
                                        onClick={() => addFavorite(product)}
                                    >
                                        <FaHeart />
                                    </div>
                                ) : (
                                    <div 
                                        className="products_favorities_icon"
                                        onClick={() => addFavorite(product)}
                                    >
                                        <CiHeart />
                                    </div>
                                )}
                            </div>
                            <div 
                                className={productsList ? "product_info_row" : "product_info"}
                                onClick={() => handlePage(product.id)}
                            >
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
                        className={`products_pagination_numbers ${currentPage === numero ? 'active' : ''
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
