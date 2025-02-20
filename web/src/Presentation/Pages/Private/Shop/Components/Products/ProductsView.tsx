import { monetaryUnit } from '../../../../../../Shared/Utils/monetaryUnit/monetaryUnit';
import { promotionValue } from '../../../../../../Shared/Utils/promotionValue/promotionValue';
import { HighQuality } from '../../../../../Components';
import Grid from '../../../../../../Assets/Icons/grid.png';
import List from '../../../../../../Assets/Icons/list.png';
import { FaHeart } from "react-icons/fa";
import { CiHeart, CiSearch } from 'react-icons/ci';
import { useFavoritiesContext } from '../../../../../Context/favoritiesContext';
import { useTranslation } from 'react-i18next';
import { IProductsProps } from './IProductsProps';

import './ProductsShop.styles.sass';

export const ProductsView = ({ loading, selecFilter, setSelectFilter, setProductsList, startIndex, endIndex, products, size, setSize, searchTerm, setSearchTerm, productsSearch, handlePage, productsList, visibleProducts, pages, currentPage, setCurrentPage }: IProductsProps) => {
    const { isFavorite, addFavorite } = useFavoritiesContext();
    const { t } = useTranslation();

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
                        <option value="featured">{t("filter.featured")}</option>
                        <option value="highest">{t("filter.high")}</option>
                        <option value="lowest">{t("filter.low")}</option>
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
                            {t("filter.showing")} {startIndex + 1}-
                            {Math.min(endIndex, products.length)} {t("filter.of")} {products.length} {t("filter.results")}
                        </p>
                    </div>
                </div>
                <div className="products_box">
                    <p>{t("filter.show")}</p>
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
                        placeholder={t("filter.search")}
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
