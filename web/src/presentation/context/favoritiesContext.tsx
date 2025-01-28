import { createContext, useContext, useState, useEffect } from "react";
import { IProduct } from "../../core/models/IProduct";
import { Props } from "../@types/props";

interface FavoritiesContextType {
    favorities: IProduct[];
    isFavorite: (product: IProduct) => boolean;
    addFavorite: (product: IProduct) => void;
}

const FavoritiesContext = createContext<FavoritiesContextType>({} as FavoritiesContextType);

export const FavoritiesContextProvider = ({ children }: Props) => {
    const [favorities, setFavorities] = useState<IProduct[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const storedFavorities = localStorage.getItem("favorities");
        if (storedFavorities) {
            setFavorities(JSON.parse(storedFavorities));
        }
        setIsInitialized(true); 
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("favorities", JSON.stringify(favorities));
        }
    }, [favorities, isInitialized]);

    function isFavorite(product: IProduct) {
        return favorities.some(item => item.id === product.id);
    }

    function addFavorite(product: IProduct) {
        if (isFavorite(product)) {
            setFavorities(favorities.filter(item => item.id !== product.id));
        } else {
            setFavorities([...favorities, product]);
        }
    }

    const values = { isFavorite, addFavorite, favorities };

    return (
        <FavoritiesContext.Provider value={values}>
            {children}
        </FavoritiesContext.Provider>
    );
};

export const useFavoritiesContext = () => {
    const favoritiesContext = useContext(FavoritiesContext);
    return favoritiesContext;
};
