import { ILoginDTO } from "../../../Infra/Dtos/ILoginDTO";
import { ILoginRepository } from "../../Contracts/ILoginRepository";
import { IUser } from "../../Models/IUser";

export class LoginUseCase {
    constructor(private readonly repository: ILoginRepository) {}

    execute(data: ILoginDTO): Promise<IUser | undefined> {
        return this.repository.login(data);
    }
}