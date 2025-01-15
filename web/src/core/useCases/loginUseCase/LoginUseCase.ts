import { ILoginDTO } from "../../../infra/dtos/ILoginDTO";
import { ILoginRepository } from "../../contracts/ILoginRepository";
import { IUser } from "../../models/IUser";

export class LoginUseCase {
    constructor(private readonly repository: ILoginRepository) {}

    execute(data: ILoginDTO): Promise<IUser | undefined> {
        return this.repository.login(data);
    }
}