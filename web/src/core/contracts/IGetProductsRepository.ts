import { IProduct } from "../models/IProduct";

export interface IGetProductsRepository {
    getAll(): Promise<IProduct[]>;
    getyId(id: number): Promise<IProduct>;
}