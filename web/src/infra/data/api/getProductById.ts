import { serveConnection, setAuthToken } from "../connection";

export const getProductById = async (id: number) => {
    try {
        const response = await fetch(`${serveConnection}/private/products/${id}`, {
            method: 'GET',
            headers: setAuthToken()
        });

        if (!response.ok) {
            throw new Error(`HTTP erro!`);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}