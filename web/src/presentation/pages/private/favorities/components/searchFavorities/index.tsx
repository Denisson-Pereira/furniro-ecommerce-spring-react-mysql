import { useEffect, useState } from 'react';
import { useFavoritiesContext } from '../../../../../context/favoritiesContext'
import './searchFavorities.styles.sass'
import { IProduct } from '../../../../../../core/models/IProduct';
import { monetaryUnit } from '../../../../../../shared/utils/monetaryUnit/monetaryUnit';
import { CiSearch } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';

export const SearchFavorities = () => {
    const { favorities } = useFavoritiesContext();
    const { t } = useTranslation();
    const [searchInput, setSearchInput] = useState<string>('');
    const [searchProducts, setSearchProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        if (searchInput === "") {
            setSearchProducts([]);
        } else {
            setSearchProducts(
                favorities.filter(product =>
                    product.name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                )
            )
        }
    }, [searchInput, favorities])

    return (
        <div className="searchFavorities_container">
            <div className="searchFavorities_search">
                <CiSearch />
                <input
                    type="text"
                    name='inputFavorities_search'
                    id='inputFavorities_search'
                    placeholder={t("favorities.search")}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className="searchFavorities_response">
                {searchInput !== "" ? (
                    searchProducts.length > 0 ? (
                        searchProducts.map((item) => (
                            <div
                                className="searchFavorities_info_box"
                                key={item.id}
                            >
                                <img src={item.image} alt="img" />
                                <div className="searchFavorities_info">
                                    <div className="searchFavorities_txt_1">
                                        <p>{item.name}</p>
                                        <span>{monetaryUnit(item.price)}</span>
                                    </div>
                                    <div className="searchFavorities_txt_2">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p id='products_not_fount'>{t("favorities.noProducts")}</p>
                    )
                ) : null}

            </div>
        </div>
    )
}
