import { ILoginDTO } from "../../../../../infra/dtos/ILoginDTO";

export function getCredentials(): Promise<ILoginDTO> {
    const email = localStorage.getItem("userEmail") || "";
    const password = localStorage.getItem("userPassword") || "";

    return Promise.resolve({ email, password });
}