import { ButtonCustom, SpinnerComponent } from "../../../../../Components"

import './CreateProduct.styles.sass'
import { monetaryUnit, promotionValue } from "../../../../../../Shared/Utils";
import { useTranslation } from "react-i18next";
import { ICreateProductProps } from "./ICreateProductProps";


export const CreateProductView = ({ handleFormSubmit, name, setName, description, setDescription, image, setImage, loading, price, setPrice, category, setCategory }: ICreateProductProps) => {
    const { t } = useTranslation();

    return (
        <div className="createProduct_container">
            <h1>{t("profile.title")}</h1>
            <div className="createProduct_form_create">
                <form onSubmit={handleFormSubmit} className="createProduct_form">
                    <div className="createProduct_input">
                        <p>{t("profile.name")}:</p>
                        <input
                            type="text"
                            name="create_procut_name"
                            id="id_create_product_name"
                            placeholder="Name Here"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="createProduct_input">
                        <p>{t("profile.description")}:</p>
                        <input
                            type="text"
                            name="create_procut_desciption"
                            id="id_create_product_description"
                            placeholder="Description Here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="createProduct_input">
                        <p>{t("profile.image")}:</p>
                        <input
                            type="text"
                            name="create_procut_image"
                            id="id_create_product_image"
                            placeholder="Image Here"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="createProduct_input">
                        <p>{t("cart.price")}:</p>
                        <input
                            type="text"
                            name="create_procut_price"
                            id="id_create_product_price"
                            placeholder="Price Here"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="createProduct_select">
                        <p>{t("profile.chose")}</p>
                        <select
                            name="selecProduct"
                            id="selecProduct_id"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Dining">Dining</option>
                            <option value="Living">Living</option>
                            <option value="Bedroom">Bedroom</option>
                        </select>
                    </div>
                    {loading ? (
                        <SpinnerComponent />
                    ) : (
                        <ButtonCustom
                            sizeText={20}
                            text={t("profile.create")}
                            type="submit"
                        />
                    )}
                </form>
                <div className="createProduct_product_box">
                    <div className="createProduct_product">
                        {image ? (
                            <img
                                src={image}
                                alt="Image"
                            />
                        ) : (
                            <img
                                src="https://placehold.co/500x500"
                                alt="Image"
                            />
                        )}
                        <div className="createProduct_info">
                            <p>{name ? name : 'Name'}</p>
                            <span>Styllish cafe chair</span>
                            <div className="createProduct_info_price">
                                <p>{price ? monetaryUnit(promotionValue(20, price)) : 'Price'}</p>
                                <span>{price ? monetaryUnit(price) : 'Price'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
