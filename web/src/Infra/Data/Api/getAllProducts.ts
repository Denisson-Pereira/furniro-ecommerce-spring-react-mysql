import { serveConnection, setAuthToken } from "../Connection";

export const getAllProducts = async (rota: string) => {
    try {
        const response = await fetch(`${serveConnection}/private/${rota}`, {
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
