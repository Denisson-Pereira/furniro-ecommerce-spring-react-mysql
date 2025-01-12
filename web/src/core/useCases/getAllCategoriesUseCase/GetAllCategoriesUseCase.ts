import { IGetAllCategoriesRepository } from "../../contracts/IGetAllCategoriesRepository";
import { CategoryExeptions } from "../../exeptions/CategoryExeptions";
import { ICategory } from "../../models/ICategory";

export class GetAllCategoriesUseCase {
    constructor(private readonly repository: IGetAllCategoriesRepository) {}

    async execute(rota: string): Promise<ICategory[]> {
        try {
            const response = await this.repository.api(rota);
            return response;
            
        } catch (error) {
            throw new CategoryExeptions();
        }
    }
}