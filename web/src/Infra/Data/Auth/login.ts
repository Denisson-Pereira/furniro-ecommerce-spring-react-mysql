import { Storage } from "../../../Shared/Constants";
import { ILoginDTO } from "../../Dtos/ILoginDTO";
import { serveConnection } from "../Connection";

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

        localStorage.setItem(Storage.USER, JSON.stringify(user));
        localStorage.setItem(Storage.TOKEN, JSON.stringify(token)); 

        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Login failed');
    }
}
