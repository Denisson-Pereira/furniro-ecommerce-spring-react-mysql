import { ILoginRepository } from "../../core/contracts/ILoginRepository";
import { IUser } from "../../core/models/IUser";
import { login } from "../data/auth/login";
import { register } from "../data/auth/register";
import { ILoginDTO } from "../dtos/ILoginDTO";
import { IRegisterDTO } from "../dtos/IRegisterDTO";

export class LoginRepositoryImpl implements ILoginRepository {

    register(data: IRegisterDTO): Promise<IUser> {
        return register(data);
    }
    login(data: ILoginDTO): Promise<IUser | undefined> {
        return login(data);
    }

}