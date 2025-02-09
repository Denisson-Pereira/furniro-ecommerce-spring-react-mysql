import { IRegisterDTO } from "../../../Infra/Dtos/IRegisterDTO";
import { ILoginRepository } from "../../Contracts/ILoginRepository";
import { IUser } from "../../Models/IUser";

export class RegisterUseCase {
    constructor(private readonly repository: ILoginRepository) {}

    execute(data: IRegisterDTO): Promise<IUser> {
        return this.repository.register(data);
    }
}