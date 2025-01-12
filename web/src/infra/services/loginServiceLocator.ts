import { LoginUseCase } from "../../core/useCases/loginUseCase/LoginUseCase";
import { LoginRepositoryImpl } from "../gateways/LoginRepositoryImpl";

const loginRepository = new LoginRepositoryImpl();
const loginUseCase = new LoginUseCase(loginRepository);

export const loginServiceLocator = {
    loginUseCase,
};