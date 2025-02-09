import { IGetProductsRepository } from "../../Contracts/IGetProductsRepository";
import { IProduct } from "../../Models/IProduct";

export class GetProductByIdUseCase {
    constructor(private readonly repository: IGetProductsRepository) {}

    execute(id: number): Promise<IProduct> {
        return this.repository.getById(id);
    }
}