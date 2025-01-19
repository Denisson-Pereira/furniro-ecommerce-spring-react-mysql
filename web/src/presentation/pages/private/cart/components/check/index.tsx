import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../../../../context/cartContext"

import './check.styles.sass'
import { monetaryUnit } from "../../../../../../utils/monetaryUnit";
import { promotionValue } from "../../../../../../utils/promotionValue";

export const Check = () => {
    const { cart, totalValue, totalValuePromo } = useCartContext();

  return (
    <div className="check_container">
        <div className="check_left">
            <div className="check_left_nav">
                <p>Product</p>
                <p>Price</p>
                <p>Subtotal</p>
            </div>
            <div className="check_left_products_box">
                {cart.length > 0 ? (
                    <div className="check_left_products">
                        {cart.map((item) => (
                            <div className="check_left_row" key={item.id}>
                                <div className="check_left_product">
                                    <img src={item.image} alt="img" />
                                    <p>{item.name}</p>
                                </div>
                                <div className="check_left_price">
                                    <p>{monetaryUnit(item.price)}</p>
                                </div>
                                <div className="check_left_subtotal">
                                    <p>{monetaryUnit(promotionValue(20, item.price))}</p>
                                    <FaTrash />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="check_left_no_products">
                        <p>No products in cart!</p>
                    </div>
                )}
            </div>
        </div>
        <div className="check_right">
            <p>Cart Totals</p>
            <div className="check_subtotal">
                <p>Subtotal</p>
                <span>{monetaryUnit(totalValue)}</span>
            </div>
            <div className="check_total">
                <p>Total</p>
                <span>{totalValuePromo}</span>
            </div>
            <div className="check_right_btn">
                <button onClick={() => alert('Purchase completed successfully')}>Check Out</button>
            </div>
        </div>
    </div>
  )
}
