import { IRegisterDTO } from "../../dtos/IRegisterDTO";
import { serveConnection } from "../connection";

export async function register(data: IRegisterDTO) {
    try {
        const response = await fetch(`${serveConnection}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ 
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password
             }),
        });

        if (!response.ok) {
            throw new Error("Register process failed");
        }

        return response.json();

    } catch (error) {
        console.log(error);
        throw new Error('Register process failed');
    }
}