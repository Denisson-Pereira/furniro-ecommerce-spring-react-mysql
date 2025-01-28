import { ICategory } from "../models/ICategory";

export interface IGetAllCategoriesRepository {
    api(rota: string): Promise<ICategory[]>
}