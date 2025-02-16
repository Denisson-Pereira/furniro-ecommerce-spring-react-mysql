import { CreateProductUseCase } from "../../Core/UseCases/CreateProductUseCase/CreateProductUseCase";
import { GetAllProductsUseCase } from "../../Core/UseCases/GetAllProductsUseCase/GetAllProductsUseCase";
import { GetProductByIdUseCase } from "../../Core/UseCases/GetProductByIdUseCase/GetProductByIdUseCase";
import { GetProductRepositoryImpl } from "../Repositories/GetProductsRepositotyImpl";

const productRepository = new GetProductRepositoryImpl();

const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);
const createProductUseCase = new CreateProductUseCase(productRepository);

export const productServiceLocator = {
    getAllProductsUseCase,
    getProductByIdUseCase,
    createProductUseCase,
};
