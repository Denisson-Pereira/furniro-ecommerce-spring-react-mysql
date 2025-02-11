import { ICategoriesRepository } from "../../Core/Contracts/ICategoriesRepository";
import { ICategory } from "../../Core/Models/ICategory";
import { getCategories } from "../Data/Api/getCategories";

export class GetAllCategoriesRepositoryImpl implements ICategoriesRepository {
    getAll(rota: string): Promise<ICategory[]> {
        return getCategories(rota);
    }

}