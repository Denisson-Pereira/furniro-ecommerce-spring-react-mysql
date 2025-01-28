import { IContactDTO } from "../../infra/dtos/IContactDTO";
import { IContact } from "../models/IContact";

export interface IContactRepository {
    save(data: IContactDTO): Promise<IContact>;
}