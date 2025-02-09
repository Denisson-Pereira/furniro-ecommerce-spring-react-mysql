import { IGetAllCategoriesRepository } from "../../Contracts/IGetAllCategoriesRepository";
import { CategoryExeptions } from "../../Exeptions/CategoryExeptions";
import { ICategory } from "../../Models/ICategory";

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