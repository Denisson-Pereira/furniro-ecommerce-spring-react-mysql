import { RegisterUseCase } from "../../core/useCases/registerUseCase/RegisterUseCase";
import { LoginRepositoryImpl } from "../gateways/LoginRepositoryImpl";

const registerRepository = new LoginRepositoryImpl();
const regsterUseCase = new RegisterUseCase(registerRepository);

export const registerServiceLocator = {
    regsterUseCase,
}