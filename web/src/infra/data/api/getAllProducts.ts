import { serveConnection, setAuthToken } from "../connection";

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${serveConnection}/private/products`, {
            method: 'GET',
            headers: setAuthToken()
        });

        if (!response.ok) {
            throw new Error(`HTTP erro! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}
