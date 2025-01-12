import { ILoginRepository } from "../../core/contracts/ILoginRepository";
import { IUser } from "../../core/models/IUser";
import { login } from "../data/auth/login";

export class LoginRepositoryImpl implements ILoginRepository {
    login(email: string, password: string): Promise<IUser | undefined> {
        return login(email, password);
    }
}