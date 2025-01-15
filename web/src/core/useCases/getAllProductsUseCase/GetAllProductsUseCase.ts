import { IGetAllProductsRepository } from "../../contracts/IGetAllProductsRepository";
import { ProductExeptions } from "../../exeptions/ProductExeptions";
import { IProduct } from "../../models/IProduct";

export class GetAllProductsUseCase {
    constructor(private readonly repository: IGetAllProductsRepository) {}

    execute(): Promise<IProduct[]> {
        try {
            return this.repository.getAll();
        } catch (error) {
            throw new ProductExeptions();
        }
    }
}