import { IGetAllCategoriesRepository } from "../../repository/IGetAllCategoriesRepository";
import { CategoryExeptions } from "../../exeptions/CategoryExeptions";
import { ICategory } from "../../models/ICategory";

export class GetAllCategoriesUseCase {
    constructor(private readonly repository: IGetAllCategoriesRepository) {}

    execute(rota: string): Promise<ICategory[]> {
        try {
            return this.repository.api(rota);
        } catch (error) {
            throw new CategoryExeptions();
        }
    }
}