import { IProductsRepository } from "../../Core/Contracts/IProductsRepository";
import { IProduct } from "../../Core/Models/IProduct";
import { createProduct } from "../Data/Api/createProduct";
import { getAllProducts } from "../Data/Api/getAllProducts";
import { getProductById } from "../Data/Api/getProductById";
import { IProductDTO } from "../Dtos/IProductDTO";

export class GetProductRepositoryImpl implements IProductsRepository {
    create(product: IProductDTO): Promise<IProduct> {
        return createProduct(product)
    }
    getById(id: number): Promise<IProduct> {
        return getProductById(id);
    }
    getAll(rota: string): Promise<IProduct[]> {
        return getAllProducts(rota);
    }
}