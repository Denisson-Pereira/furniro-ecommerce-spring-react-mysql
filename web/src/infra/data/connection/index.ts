export const serveConnection: string = "http://localhost:8080";

export const setAuthToken = (): HeadersInit => {
    const token = localStorage.getItem('@FurniroWeb:tokenStore');
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
}