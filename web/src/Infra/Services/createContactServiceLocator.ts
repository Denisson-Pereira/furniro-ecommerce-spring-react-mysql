import { CreateContactUseCase } from "../../Core/UseCases/CreateContactUseCase/CreateContactUseCase";
import { CreateContactRepositoryImpl } from "../Repositories/CreateContactRepositoryImpl";


const createContactRepository = new CreateContactRepositoryImpl();
const createContactUseCase = new CreateContactUseCase(createContactRepository);

export const createContactServiceLocator = {
    createContactUseCase,
}