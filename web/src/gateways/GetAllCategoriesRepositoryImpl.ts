import { IGetAllCategoriesRepository } from "../core/contracts/IGetAllCategoriesRepository";
import { ICategory } from "../core/models/ICategory";
import { getCategories } from "../data/api/getCategories";

export class GetAllCategoriesRepositoryImpl implements IGetAllCategoriesRepository {
    api(rota: string): Promise<ICategory[]> {
        return getCategories(rota);
    }

}