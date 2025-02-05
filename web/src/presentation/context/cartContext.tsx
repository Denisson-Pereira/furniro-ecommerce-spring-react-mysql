import { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../../core/models/IProduct";
import { monetaryUnit } from "../../shared/utils/monetaryUnit/monetaryUnit";
import { promotionValue } from "../../shared/utils/promotionValue/promotionValue";
import { Props } from "../@types/props";

interface CartContextType {
    totalValue: string
    totalValuePromo: string
    cart: IProduct[]
    addCart: (product: IProduct) => void
    removeCart: (product: IProduct) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [totalValue, setTotalValue] = useState<string>('');
    const [totalValuePromo, setTotalValuePromo] = useState<string>('');
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
            setTotalValuePromo(monetaryUnit(promotionValue(20, sum.toString())));
            setTotalValue(sum.toString());
        }
    }, [cart, isInitialized]);

    function addCart(product: IProduct) {
        setCart([...cart, product]);
    }

    function removeCart(product: IProduct) {
        const index = cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            const newCart = [...cart];
            newCart.splice(index, 1); 
            setCart(newCart);
        }
    }
    

    const values = { cart, addCart, removeCart, totalValue, totalValuePromo }

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