import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../../../../Context/cartContext"
import './check.styles.sass'
import { monetaryUnit } from "../../../../../../Shared/Utils/monetaryUnit/monetaryUnit";
import { promotionValue } from "../../../../../../Shared/Utils/promotionValue/promotionValue";
import { useHandlePage } from "../../../../../Hooks/useHandlePage";
import { useTranslation } from "react-i18next";
import { Constants } from "../../../../../../Shared/Constants";

export const Check = () => {
    const { cart, totalValue, totalValuePromo, removeCart } = useCartContext();
    const handlePage = useHandlePage();
    const { t } = useTranslation();

    const sendToWhatsApp = () => {
        const phoneNumber = Constants.PHONE_NUMBER;

        if (cart.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        let message = "*Pedido Realizado*%0A%0A";

        cart.forEach((item, index) => {
            message += `*${index + 1}.* ${item.name} - ${monetaryUnit(item.price)}%0A%0A`;
        });

        message += `*Subtotal:* ${monetaryUnit(totalValue)}%0A%0A`;
        message += `*Total com Desconto:* ${totalValuePromo}%0A%0A`;
        message += `*Forma de pagamento:* Especifique aqui`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="check_container">
            <div className="check_left">
                <div className="check_left_nav">
                    <p>{t("cart.product")}</p>
                    <p>{t("cart.price")}</p>
                    <p>{t("cart.subtotal")}</p>
                </div>
                <div className="check_left_products_box">
                    {cart.length > 0 ? (
                        <div className="check_left_products">
                            {cart.map((item, index) => (
                                <div className="check_left_row" key={`${item.id}-${index}`}>
                                    <div className="check_left_product" onClick={() => handlePage(item.id)}>
                                        <img src={item.image} alt="img" />
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="check_left_price">
                                        <p>{monetaryUnit(item.price)}</p>
                                    </div>
                                    <div className="check_left_subtotal">
                                        <p>{monetaryUnit(promotionValue(20, item.price))}</p>
                                        <FaTrash onClick={() => removeCart(item)} />
                                    </div>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div className="check_left_no_products">
                            <p>{t("cart.noProducts")}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="check_right">
                <p>{t("cart.cartTotals")}</p>
                <div className="check_subtotal">
                    <p>{t("cart.subtotal")}</p>
                    <span>{monetaryUnit(totalValue)}</span>
                </div>
                <div className="check_total">
                    <p>{t("cart.total")}</p>
                    <span>{totalValuePromo}</span>
                </div>
                <div className="check_right_btn">
                    <button onClick={sendToWhatsApp}>{t("cart.check")}</button>
                </div>
            </div>
        </div>
    )
}
