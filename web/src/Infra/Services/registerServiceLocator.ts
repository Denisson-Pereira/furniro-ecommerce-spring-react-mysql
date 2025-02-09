import { RegisterUseCase } from "../../Core/UseCases/RegisterUseCase/RegisterUseCase";
import { LoginRepositoryImpl } from "../Repositories/LoginRepositoryImpl";

const registerRepository = new LoginRepositoryImpl();
const regsterUseCase = new RegisterUseCase(registerRepository);

export const registerServiceLocator = {
    regsterUseCase,
}