import { LoginUseCase } from "../../core/useCases/loginUseCase/LoginUseCase";
import { LogoutUseCase } from "../../core/useCases/logoutUseCase/LogoutUseCase";
import { LoginRepositoryImpl } from "../repositories/LoginRepositoryImpl";

const loginRepository = new LoginRepositoryImpl();
const loginUseCase = new LoginUseCase(loginRepository);
const logoutUseCase = new LogoutUseCase(loginRepository);

export const loginServiceLocator = {
    loginUseCase,
    logoutUseCase
};