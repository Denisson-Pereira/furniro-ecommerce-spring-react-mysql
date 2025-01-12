import { ILoginRepository } from "../../contracts/ILoginRepository";
import { IUser } from "../../models/IUser";

export class LoginUseCase {
    constructor(private readonly repository: ILoginRepository) {}

    async execute(email: string, password: string): Promise<IUser | undefined> {
        return this.repository.login(email, password);
    }
}