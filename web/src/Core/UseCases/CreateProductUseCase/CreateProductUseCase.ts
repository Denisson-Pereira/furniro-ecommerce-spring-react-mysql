import { IProductDTO } from "../../../Infra/Dtos/IProductDTO";
import { IProductsRepository } from "../../Contracts/IProductsRepository";
import { ProductExeptions } from "../../Exeptions/ProductExeptions";
import { IProduct } from "../../Models/IProduct";

export class CreateProductUseCase {
    constructor(private readonly repository: IProductsRepository) {}

    execute(product: IProductDTO): Promise<IProduct> {
        try {
            return this.repository.create(product);
        } catch (error) {
            throw new ProductExeptions();
        }
    }
}