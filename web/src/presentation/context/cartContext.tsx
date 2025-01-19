import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../../core/models/IProduct";
import { monetaryUnit } from "../../utils/monetaryUnit";
import { promotionValue } from "../../utils/promotionValue";

interface CartContextType {
    totalValueCart: string
    cart: IProduct[]
    addCart: (product: IProduct) => void
    removeCart: (product: IProduct) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType);

interface Props {
    children: ReactNode;
}

export const CartContextProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [totalValueCart, setTotalValueCart] = useState<string>('');
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
        setIsInitialized(true);
    }, [])

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("cart", JSON.stringify(cart));
            const array = cart.filter(item => item.price);
            const sum = array.reduce((acc, current) => acc + parseFloat(current.price), 0);
            setTotalValueCart(monetaryUnit(promotionValue(20, sum.toString())));
        }
    }, [cart, isInitialized]);

    function addCart(product: IProduct) {
        setCart([...cart, product]);
    }

    function removeCart(product: IProduct) {
        setCart(cart.filter(item => item !== product));
    }

    const values = { cart, addCart, removeCart, totalValueCart }

    return (
        <CartContext.Provider value={values}>
            { children }
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
}