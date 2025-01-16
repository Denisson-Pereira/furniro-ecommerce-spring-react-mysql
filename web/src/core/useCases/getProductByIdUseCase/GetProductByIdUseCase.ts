import { IGetProductsRepository } from "../../contracts/IGetProductsRepository";
import { IProduct } from "../../models/IProduct";

export class GetProductByIdUseCase {
    constructor(private readonly repository: IGetProductsRepository) {}

    execute(id: number): Promise<IProduct> {
        return this.repository.getyId(id);
    }
}