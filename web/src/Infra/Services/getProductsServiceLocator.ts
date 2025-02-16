import { CreateProductUseCase } from "../../Core/UseCases/CreateProductUseCase/CreateProductUseCase";
import { GetAllProductsUseCase } from "../../Core/UseCases/GetAllProductsUseCase/GetAllProductsUseCase";
import { GetProductByIdUseCase } from "../../Core/UseCases/GetProductByIdUseCase/GetProductByIdUseCase";
import { GetProductRepositoryImpl } from "../Repositories/GetProductsRepositotyImpl";

const getAllProductsRepository = new GetProductRepositoryImpl();
const getAllProductsUseCase = new GetAllProductsUseCase(getAllProductsRepository);

const getProductRepository = new GetProductRepositoryImpl();
const getProductUseCase = new GetProductByIdUseCase(getProductRepository);

const createProductUseCase = new CreateProductUseCase(getAllProductsRepository);

export const getAllProductsServiceLocator = {
    getAllProductsUseCase,
}

export const getProductByIdServiceLocator = {
    getProductUseCase,
}

export const createProductServiceLocator = {
    createProductUseCase,
}