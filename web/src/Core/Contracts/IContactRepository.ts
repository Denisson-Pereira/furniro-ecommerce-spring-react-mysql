import { IContactDTO } from "../../Infra/Dtos/IContactDTO";
import { IContact } from "../Models/IContact";

export interface IContactRepository {
    save(data: IContactDTO): Promise<IContact>;
}