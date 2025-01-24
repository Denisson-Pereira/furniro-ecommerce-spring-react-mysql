export function logout(): void {
    try {
        localStorage.removeItem('@FurniroWeb:userStore');
        localStorage.removeItem('@FurniroWeb:tokenStore');

    } catch (error) {
        console.error('Erro ao realizar logout:', error);
    }
}
