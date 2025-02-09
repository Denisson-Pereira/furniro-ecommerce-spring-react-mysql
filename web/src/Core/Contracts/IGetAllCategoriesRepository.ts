import { ICategory } from "../Models/ICategory";

export interface IGetAllCategoriesRepository {
    api(rota: string): Promise<ICategory[]>
}