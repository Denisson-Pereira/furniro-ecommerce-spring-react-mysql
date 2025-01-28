import { Storage } from "../../../shared/constants";

export const serveConnection: string = "http://localhost:8080";

export const setAuthToken = (): HeadersInit => {
    const token = localStorage.getItem(Storage.TOKEN);
    const cleanedToken = token?.replace(/^['"]|['"]$/g, '');
    if (!cleanedToken) {
        throw new Error('Token de autenticação não encontrado!');
    }
    console.log(cleanedToken);

    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cleanedToken}`,
    };
};
