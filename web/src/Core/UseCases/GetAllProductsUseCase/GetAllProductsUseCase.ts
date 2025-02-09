
import { IGetProductsRepository } from "../../Contracts/IGetProductsRepository";
import { ProductExeptions } from "../../Exeptions/ProductExeptions";
import { IProduct } from "../../Models/IProduct";

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