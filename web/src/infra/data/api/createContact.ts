import { IContactDTO } from "../../dtos/IContactDTO"
import { serveConnection, setAuthToken } from "../connection";

export async function createContact(data: IContactDTO) {
    try {
        const response = await fetch(`${serveConnection}/contact`, {
            method: 'POST',
            headers: setAuthToken(),
            body: JSON.stringify({
                your_name: data.your_name,
                email_address: data.email_address,
                subject: data.subject,
                message: data.message
            })
        });

        if (!response.ok) {
            throw new Error("Contact process failed");
        }

        return response.json();
    } catch (error) {
        console.log(error);
    }
}