import { IContactDTO } from "../../../infra/dtos/IContactDTO";
import { IContactRepository } from "../../contracts/IContactRepository";
import { ContactExeptions } from "../../exeptions/ContactExeptions";
import { IContact } from "../../models/IContact";

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