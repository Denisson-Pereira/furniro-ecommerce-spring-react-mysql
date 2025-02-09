import { IGetAllCategoriesRepository } from "../../Core/Contracts/IGetAllCategoriesRepository";
import { ICategory } from "../../Core/Models/ICategory";
import { getCategories } from "../Data/Api/getCategories";

export class GetAllCategoriesRepositoryImpl implements IGetAllCategoriesRepository {
    api(rota: string): Promise<ICategory[]> {
        return getCategories(rota);
    }

}