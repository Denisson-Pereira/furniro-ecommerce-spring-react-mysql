import { ILoginDTO } from "../../dtos/ILoginDTO";
import { serveConnection } from "../connection";

export async function login(data: ILoginDTO) {
    try {
        const response = await fetch(`${serveConnection}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ 
                email: data.email,
                password: data.password
             }), 
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const { user, token } = await response.json();

        localStorage.setItem('@FurniroWeb:userStore', JSON.stringify(user));
        localStorage.setItem('@FurniroWeb:tokenStore', JSON.stringify(token)); 

        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Login failed');
    }
}
