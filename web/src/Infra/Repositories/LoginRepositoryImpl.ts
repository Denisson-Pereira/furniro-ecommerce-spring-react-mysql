import { ILoginRepository } from "../../Core/Contracts/ILoginRepository";
import { IUser } from "../../Core/Models/IUser";
import { login } from "../Data/Auth/login";
import { logout } from "../Data/Auth/logout";
import { register } from "../Data/Auth/register";
import { ILoginDTO } from "../Dtos/ILoginDTO";
import { IRegisterDTO } from "../Dtos/IRegisterDTO";

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