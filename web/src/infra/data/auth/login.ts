import { serveConnection } from "../connection";

export async function login(email: string, password: string) {
    try {
        const response = await fetch(`${serveConnection}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ email, password }), 
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const { data } = await response.json();

        localStorage.setItem('@FurniroWeb:userStore', JSON.stringify(data.user));
        localStorage.setItem('@FurniroWeb:tokenStore', JSON.stringify(data.token)); 

        return data;
    } catch (error) {
        console.log(error);
        return;
    }
}
