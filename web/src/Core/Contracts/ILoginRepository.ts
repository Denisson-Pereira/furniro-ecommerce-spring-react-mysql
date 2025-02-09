import { ILoginDTO } from "../../Infra/Dtos/ILoginDTO";
import { IRegisterDTO } from "../../Infra/Dtos/IRegisterDTO";
import { IUser } from "../Models/IUser";

export interface ILoginRepository {
    login(data: ILoginDTO): Promise<IUser | undefined>
    register(data: IRegisterDTO): Promise<IUser>
    logout(): void;
}