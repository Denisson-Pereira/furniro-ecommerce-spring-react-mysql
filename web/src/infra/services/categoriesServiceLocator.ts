import { GetAllCategoriesUseCase } from "../../core/useCases/getAllCategories/getAllCategoriesUseCase";
import { GetAllCategoriesRepositoryImpl } from "../gateways/GetAllCategoriesRepositoryImpl";

const categoriesRepository = new GetAllCategoriesRepositoryImpl();
const categoriesUseCase = new GetAllCategoriesUseCase(categoriesRepository);

export const categoriesServiceLocator = {
    categoriesUseCase,
}