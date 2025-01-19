import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { IProduct } from "../../core/models/IProduct";

interface FavoritiesContextType {
    favorities: IProduct[];
    isFavorite: (product: IProduct) => boolean;
    addFavorite: (product: IProduct) => void;
    removeFavorite: (product: IProduct) => void;
}

const FavoritiesContext = createContext<FavoritiesContextType | null>(null);

interface Props {
    children: ReactNode;
}

export const FavoritiesContextProvider = ({ children }: Props) => {
    const [favorities, setFavorities] = useState<IProduct[]>([]);

    useEffect(() => {
        const storedFavorities = localStorage.getItem("favorities");
        if (storedFavorities) {
            setFavorities(JSON.parse(storedFavorities));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorities", JSON.stringify(favorities));
    }, [favorities]);

    function isFavorite(product: IProduct) {
        return favorities.some(item => item.id === product.id);
    }

    function addFavorite(product: IProduct) {
        if (!isFavorite(product)) {
            setFavorities([...favorities, product]);
        }
    }

    function removeFavorite(product: IProduct) {
        if (isFavorite(product)) {
            setFavorities(favorities.filter(item => item.id !== product.id));
        }
    }

    const values = { isFavorite, addFavorite, removeFavorite, favorities };

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
