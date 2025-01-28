import { IProduct } from "../models/IProduct";

export interface IGetProductsRepository {
    getAll(): Promise<IProduct[]>;
    getById(id: number): Promise<IProduct>;
}