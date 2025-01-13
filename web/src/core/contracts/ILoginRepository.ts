import { ILoginDTO } from "../../infra/dtos/ILoginDTO";
import { IRegisterDTO } from "../../infra/dtos/IRegisterDTO";
import { IUser } from "../models/IUser";

export interface ILoginRepository {
    login(data: ILoginDTO): Promise<IUser | undefined>;
    register(data: IRegisterDTO): Promise<IUser>
}