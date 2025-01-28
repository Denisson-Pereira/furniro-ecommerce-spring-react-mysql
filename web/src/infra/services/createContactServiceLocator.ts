import { CreateContactUseCase } from "../../core/useCases/createContactUseCase/CreateContactUseCase";
import { CreateContactRepositoryImpl } from "../repositories/CreateContactRepositoryImpl";


const createContactRepository = new CreateContactRepositoryImpl();
const createContactUseCase = new CreateContactUseCase(createContactRepository);

export const createContactServiceLocator = {
    createContactUseCase,
}