
import { IGetProductsRepository } from "../../repository/IGetProductsRepository";
import { ProductExeptions } from "../../exeptions/ProductExeptions";
import { IProduct } from "../../models/IProduct";

export class GetAllProductsUseCase {
    constructor(private readonly repository: IGetProductsRepository) {}

    async execute(): Promise<IProduct[]> {
        try {
            return this.repository.getAll();
        } catch (error) {
            throw new ProductExeptions();
        }
    }
}