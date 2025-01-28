import { GetAllProductsUseCase } from "../../core/useCases/getAllProductsUseCase/GetAllProductsUseCase";
import { GetProductByIdUseCase } from "../../core/useCases/getProductByIdUseCase/GetProductByIdUseCase";
import { GetProductRepositoryImpl } from "../repositories/GetProductsRepositotyImpl";

const getAllProductsRepository = new GetProductRepositoryImpl();
const getAllProductsUseCase = new GetAllProductsUseCase(getAllProductsRepository);

const getProductRepository = new GetProductRepositoryImpl();
const getProductUseCase = new GetProductByIdUseCase(getProductRepository);

export const getAllProductsServiceLocator = {
    getAllProductsUseCase,
}

export const getProductByIdServiceLocator = {
    getProductUseCase,
}