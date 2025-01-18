import { IContactRepository } from "../../core/contracts/IContactRepository";
import { IContact } from "../../core/models/IContact";
import { createContact } from "../data/api/createContact";
import { IContactDTO } from "../dtos/IContactDTO";

export class CreateContactRepositoryImpl implements IContactRepository {
    save(data: IContactDTO): Promise<IContact> {
        return createContact(data);
    }
}