import { IProductsRepository } from "../../Core/Contracts/IProductsRepository";
import { IProduct } from "../../Core/Models/IProduct";
import { getAllProducts } from "../Data/Api/getAllProducts";
import { getProductById } from "../Data/Api/getProductById";

export class GetProductRepositoryImpl implements IProductsRepository {
    getById(id: number): Promise<IProduct> {
        return getProductById(id);
    }
    getAll(rota: string): Promise<IProduct[]> {
        return getAllProducts(rota);
    }
}