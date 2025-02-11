import { IProductsRepository } from "../../Contracts/IProductsRepository";
import { IProduct } from "../../Models/IProduct";
import { GetAllBaseUseCase } from "../Bases/GetAllBaseUseCase";

export class GetAllProductsUseCase extends GetAllBaseUseCase<IProduct> {

    constructor(private readonly repository: IProductsRepository) {
        super();
    }

    getAll(rota: string): Promise<IProduct[]> {
        return this.repository.getAll(rota);
    }
    getName(): string {
        return "products";
    }

}