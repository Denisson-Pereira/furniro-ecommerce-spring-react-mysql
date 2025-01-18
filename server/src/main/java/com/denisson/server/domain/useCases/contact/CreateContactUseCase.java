package com.denisson.server.domain.useCases.contact;

import com.denisson.server.domain.entities.Contact;
import com.denisson.server.domain.ports.IRepositoryContact;

public class CreateContactUseCase {
    private final IRepositoryContact repository;

    public CreateContactUseCase(IRepositoryContact repository) {
        this.repository = repository;
    }

    public Contact execute(Contact contact) {
        return repository.save(contact);
    }
}
