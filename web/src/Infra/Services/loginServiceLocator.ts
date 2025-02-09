import { LoginUseCase } from "../../Core/UseCases/LoginUseCase/LoginUseCase";
import { LogoutUseCase } from "../../Core/UseCases/LogoutUseCase/LogoutUseCase";
import { LoginRepositoryImpl } from "../Repositories/LoginRepositoryImpl";

const loginRepository = new LoginRepositoryImpl();
const loginUseCase = new LoginUseCase(loginRepository);
const logoutUseCase = new LogoutUseCase(loginRepository);

export const loginServiceLocator = {
    loginUseCase,
    logoutUseCase
};