import { ILoginRepository } from "../../core/repository/ILoginRepository";
import { IUser } from "../../core/models/IUser";
import { login } from "../data/auth/login";
import { logout } from "../data/auth/logout";
import { register } from "../data/auth/register";
import { ILoginDTO } from "../dtos/ILoginDTO";
import { IRegisterDTO } from "../dtos/IRegisterDTO";

export class LoginRepositoryImpl implements ILoginRepository {
    logout(): void {
        return logout();
    }

    register(data: IRegisterDTO): Promise<IUser> {
        return register(data);
    }
    login(data: ILoginDTO): Promise<IUser | undefined> {
        return login(data);
    }

}