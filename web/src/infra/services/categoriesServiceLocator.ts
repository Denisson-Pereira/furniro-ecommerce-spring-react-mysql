import { GetAllCategoriesUseCase } from "../../core/useCases/getAllCategoriesUseCase/GetAllCategoriesUseCase";
import { GetAllCategoriesRepositoryImpl } from "../repositories/GetAllCategoriesRepositoryImpl";

const categoriesRepository = new GetAllCategoriesRepositoryImpl();
const categoriesUseCase = new GetAllCategoriesUseCase(categoriesRepository);

export const categoriesServiceLocator = {
    categoriesUseCase,
}