import { Constants } from "../../../Shared/Constants";

export function logout(): void {
    try {
        localStorage.removeItem(Constants.USER);
        localStorage.removeItem(Constants.TOKEN);

    } catch (error) {
        console.error('Erro ao realizar logout:', error);
    }
}
