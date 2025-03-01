import { IProductsRepository } from "../../Contracts/IProductsRepository";
import { IProduct } from "../../Models/IProduct";

export class GetProductByIdUseCase {
    constructor(private readonly repository: IProductsRepository) {}

    execute(id: number): Promise<IProduct> {
        return this.repository.getById(id);
    }
}