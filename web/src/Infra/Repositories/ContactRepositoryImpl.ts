import { IContactRepository } from "../../Core/Contracts/IContactRepository";
import { IContact } from "../../Core/Models/IContact";
import { createContact } from "../Data/Api/createContact";
import { IContactDTO } from "../Dtos/IContactDTO";

export class ContactRepositoryImpl implements IContactRepository {
    save(data: IContactDTO): Promise<IContact> {
        return createContact(data);
    }
}