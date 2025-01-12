import { IUser } from "../models/IUser";

export interface ILoginRepository {
    login(email: string, password: string): Promise<IUser | undefined>;
}