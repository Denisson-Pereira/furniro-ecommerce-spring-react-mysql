import { IProductDTO } from "../../Infra/Dtos/IProductDTO";
import { IProduct } from "../Models/IProduct";

export interface IProductsRepository {
    getAll(rota: string): Promise<IProduct[]>
    getById(id: number): Promise<IProduct>
    create(product: IProductDTO): Promise<IProduct>
}