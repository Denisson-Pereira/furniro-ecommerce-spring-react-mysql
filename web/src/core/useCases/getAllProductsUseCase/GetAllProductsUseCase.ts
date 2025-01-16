import { IGetAllProductsRepository } from "../../contracts/IGetProductsRepository";
import { ProductExeptions } from "../../exeptions/ProductExeptions";
import { IProduct } from "../../models/IProduct";

export class GetAllProductsUseCase {
    constructor(private readonly repository: IGetAllProductsRepository) {}

    async execute(): Promise<IProduct[]> {
        try {
            return this.repository.getAll();
        } catch (error) {
            throw new ProductExeptions();
        }
    }
}