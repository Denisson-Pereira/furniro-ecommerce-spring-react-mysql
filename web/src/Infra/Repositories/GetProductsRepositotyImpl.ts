import { IProductsRepository } from "../../Core/Contracts/IProductsRepository";
import { IProduct } from "../../Core/Models/IProduct";
import { getAllProducts } from "../Data/Api/getAllProducts";
import { getProductById } from "../Data/Api/getProductById";

export class GetProductRepositoryImpl implements IProductsRepository {
    create(product: IProduct): Promise<IProduct> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<IProduct> {
        return getProductById(id);
    }
    getAll(rota: string): Promise<IProduct[]> {
        return getAllProducts(rota);
    }
}