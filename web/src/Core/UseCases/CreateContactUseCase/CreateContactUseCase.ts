import { IContactDTO } from "../../../Infra/Dtos/IContactDTO";
import { IContactRepository } from "../../Contracts/IContactRepository";
import { ContactExeptions } from "../../Exeptions/ContactExeptions";
import { IContact } from "../../Models/IContact";

export class CreateContactUseCase {
    constructor(private readonly repository: IContactRepository) {}

    execute(data: IContactDTO): Promise<IContact> {
        try {
            return this.repository.save(data);
        } catch (error) {
            throw new ContactExeptions();
        }
    }
}