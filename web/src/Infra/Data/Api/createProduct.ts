import { IProductDTO } from "../../Dtos/IProductDTO";
import { serveConnection, setAuthToken } from "../Connection";

export const createProduct = async (product: IProductDTO) => {
    try {
        const response = await fetch(`${serveConnection}/private/products`, {
            method: 'POST',
            headers: setAuthToken(),
            body: JSON.stringify({
                name: product.name,
                description: product.description,
                image: product.image,
                category: product.category,
                price: product.price
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP erro! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}