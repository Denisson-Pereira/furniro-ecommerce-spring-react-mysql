import { describe, vi } from "vitest";
import { IContactRepository } from "../../Contracts/IContactRepository";
import { CreateContactUseCase } from "./CreateContactUseCase";
import { IContact } from "../../Models/IContact";
import { IContactDTO } from "../../../Infra/Dtos/IContactDTO";

describe("CreateContact", () => {
    let mockRepository: IContactRepository;
    let createContact: CreateContactUseCase;

    beforeEach(() => {
        mockRepository = {
            save: vi.fn()
        };

        createContact = new CreateContactUseCase(mockRepository);
    })

    it("Should sucessfully create new contact", async () => {
        const newContact: IContact = {
            id: 1,
            your_name: "Name",
            email_address: "email.com",
            subject: "subject",
            message: "message here"
        };

        const contactDTO: IContactDTO = {
            your_name: "Name",
            email_address: "email.com",
            subject: "subject",
            message: "message here"
        };

        (mockRepository.save as any).mockResolvedValue(newContact);

        const result = await createContact.execute(contactDTO);

        expect(mockRepository.save).toHaveBeenCalledTimes(1);
        expect(result).toEqual(newContact);
    });
})