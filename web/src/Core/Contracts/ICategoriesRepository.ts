import { ICategory } from "../Models/ICategory";

export interface ICategoriesRepository {
    getAll(rota: string): Promise<ICategory[]>
}