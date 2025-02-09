import { GetAllCategoriesUseCase } from "../../Core/UseCases/GetAllCategoriesUseCase/GetAllCategoriesUseCase";
import { GetAllCategoriesRepositoryImpl } from "../Repositories/GetAllCategoriesRepositoryImpl";

const categoriesRepository = new GetAllCategoriesRepositoryImpl();
const categoriesUseCase = new GetAllCategoriesUseCase(categoriesRepository);

export const categoriesServiceLocator = {
    categoriesUseCase,
}