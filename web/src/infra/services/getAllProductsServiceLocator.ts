import { GetAllProductsUseCase } from "../../core/useCases/getAllProductsUseCase/GetAllProductsUseCase";
import { GetAllProductRepositoryImpl } from "../gateways/GetAllProductsRepositotyImpl";

const getAllProductsRepository = new GetAllProductRepositoryImpl();
const getAllProductsUseCase = new GetAllProductsUseCase(getAllProductsRepository);

export const getAllProductsServiceLocator = {
    getAllProductsUseCase,
}