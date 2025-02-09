import { IGetProductsRepository } from "../../Core/Contracts/IGetProductsRepository";
import { IProduct } from "../../Core/Models/IProduct";
import { getAllProducts } from "../Data/Api/getAllProducts";
import { getProductById } from "../Data/Api/getProductById";

export class GetProductRepositoryImpl implements IGetProductsRepository {
    getById(id: number): Promise<IProduct> {
        return getProductById(id);
    }
    getAll(): Promise<IProduct[]> {
        return getAllProducts();
    }
}