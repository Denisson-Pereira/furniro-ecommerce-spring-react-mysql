import { IGetProductsRepository } from "../../core/contracts/IGetProductsRepository";
import { IProduct } from "../../core/models/IProduct";
import { getAllProducts } from "../data/api/getAllProducts";
import { getProductById } from "../data/api/getProductById";

export class GetProductRepositoryImpl implements IGetProductsRepository {
    getyId(id: number): Promise<IProduct> {
        return getProductById(id);
    }
    getAll(): Promise<IProduct[]> {
        return getAllProducts();
    }

}