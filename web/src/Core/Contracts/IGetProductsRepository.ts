import { IProduct } from "../Models/IProduct";

export interface IGetProductsRepository {
    getAll(): Promise<IProduct[]>;
    getById(id: number): Promise<IProduct>;
}