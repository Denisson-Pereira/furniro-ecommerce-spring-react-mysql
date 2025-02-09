import { Storage } from "../../../Shared/Constants";

export const serveConnection = import.meta.env.VITE_DB_URL

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
