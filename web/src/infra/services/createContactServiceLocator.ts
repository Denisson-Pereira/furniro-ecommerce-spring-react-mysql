import { CreateContactUseCase } from "../../core/useCases/createContactUseCase/CreateContactUseCase";
import { CreateContactRepositoryImpl } from "../gateways/CreateContactRepositoryImpl";


const createContactRepository = new CreateContactRepositoryImpl();
const createContactUseCase = new CreateContactUseCase(createContactRepository);

export const createContactServiceLocator = {
    createContactUseCase,
}