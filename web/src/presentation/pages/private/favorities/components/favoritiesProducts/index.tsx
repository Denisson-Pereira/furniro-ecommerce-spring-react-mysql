import { useFavoritiesContext } from '../../../../../context/favoritiesContext'
import { useHandlePage } from '../../../../../hooks/useHandlePage';
import './favoritiesProducts.styles.sass'
import { monetaryUnit } from '../../../../../../utils/monetaryUnit';
import { promotionValue } from '../../../../../../utils/promotionValue';
import { FaHeart } from 'react-icons/fa';

export const FavoritiesProducts = () => {
    const { favorities, isFavorite, addFavorite } = useFavoritiesContext();
    const handlePage = useHandlePage();
  return (
    <div className="favoritiesProducts_container">
        <div className="favoritiesProducts_box">
            {favorities.map((item) => (
                <div 
                    className="favoritiesProducts_card"
                    key={item.id}
                >
                    <img 
                        src={item.image} 
                        alt="img" 
                        onClick={() => handlePage(item.id)}
                    />
                    <div className="favoritiesProducts_favorities_box">
                        {isFavorite(item) && (
                            <div 
                            className="favoritiesProducts_icon"
                                onClick={() => addFavorite(item)}
                            >
                                <FaHeart />
                            </div>
                        )}
                    </div>
                    <div 
                        className="favoritiesProducts_info"
                        onClick={() => addFavorite(item)}
                    >
                        <p>{item.name}</p>
                        <span>Styllish cafe chair</span>
                        <div className="favoritiesProducts_info_price">
                            <p>{monetaryUnit(item.price)}</p>
                            <span>{monetaryUnit(promotionValue(20, item.price))}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
