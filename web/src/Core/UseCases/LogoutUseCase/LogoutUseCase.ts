import { ILoginRepository } from "../../Contracts/ILoginRepository";

export class LogoutUseCase {
    constructor(private readonly repository: ILoginRepository) {}

    execute() {
        return this.repository.logout();
    }
}