import { IGetAllProductsRepository } from "../../core/contracts/IGetAllProductsRepository";
import { IProduct } from "../../core/models/IProduct";
import { getAllProducts } from "../data/api/getAllProducts";

export class GetAllProductRepositoryImpl implements IGetAllProductsRepository {
    getAll(): Promise<IProduct[]> {
        return getAllProducts();
    }

}