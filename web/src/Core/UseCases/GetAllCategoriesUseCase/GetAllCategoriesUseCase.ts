import { ICategoriesRepository } from "../../Contracts/ICategoriesRepository";
import { ICategory } from "../../Models/ICategory";
import { GetAllBaseUseCase } from "../Bases/GetAllBaseUseCase";

export class GetAllCategoriesUseCase extends GetAllBaseUseCase<ICategory> {

    constructor(private readonly repository: ICategoriesRepository) {
        super();
    }

    getAll(rota: string): Promise<ICategory[]> {
        return this.repository.getAll(rota);
    }
    getName(): string {
        return "categories";
    }

}