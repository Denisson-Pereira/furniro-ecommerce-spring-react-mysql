import React from "react"
import { ButtonCustom } from "../../../../../Components"

import './CreateProduct.styles.sass'


export const CreateProduct = () => {
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

  return (
    <div className="createProduct_container">
        <form onSubmit={handleFormSubmit} className="createProduct_form">
            <div className="createProduct_input">
                <p>Name:</p>
                <input
                    type="text"
                    name="create_procut_name"
                    id="id_create_product_name"
                    placeholder="Name Here"
                    required
                />
            </div>
            <div className="createProduct_input">
                <p>Description:</p>
                <input
                    type="text"
                    name="create_procut_desciption"
                    id="id_create_product_description"
                    placeholder="Description Here"
                    required
                />
            </div>
            <div className="createProduct_input">
                <p>Image:</p>
                <input
                    type="text"
                    name="create_procut_image"
                    id="id_create_product_image"
                    placeholder="Image Here"
                    required
                />
            </div>
            <div className="createProduct_input">
                <p>Price:</p>
                <input
                    type="text"
                    name="create_procut_price"
                    id="id_create_product_price"
                    placeholder="Price Here"
                    required
                />
            </div>
            <ButtonCustom
                sizeText={20}
                text="Create"
                type="submit"
            />
        </form>
    </div>
  )
}
