import { IProduct } from "../models/IProduct";

export interface IGetAllProductsRepository {
    getAll(): Promise<IProduct[]>;
}