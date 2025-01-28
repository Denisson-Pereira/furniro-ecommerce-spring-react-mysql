import { IRegisterDTO } from "../../../infra/dtos/IRegisterDTO";
import { ILoginRepository } from "../../repository/ILoginRepository";
import { IUser } from "../../models/IUser";

export class RegisterUseCase {
    constructor(private readonly repository: ILoginRepository) {}

    execute(data: IRegisterDTO): Promise<IUser> {
        return this.repository.register(data);
    }
}