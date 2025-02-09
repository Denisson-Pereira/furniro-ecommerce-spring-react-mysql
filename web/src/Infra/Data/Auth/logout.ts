import { Storage } from "../../../Shared/Constants";

export function logout(): void {
    try {
        localStorage.removeItem(Storage.USER);
        localStorage.removeItem(Storage.TOKEN);

    } catch (error) {
        console.error('Erro ao realizar logout:', error);
    }
}
