package com.denisson.server.drivers.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.server.domain.ports.IRepositoryContact;
import com.denisson.server.domain.useCases.contact.CreateContactUseCase;

@Configuration
public class ContactConf {
    private final IRepositoryContact repository;

    public ContactConf(IRepositoryContact repository) {
        this.repository = repository;
    }

    @Bean
    public CreateContactUseCase createContactUseCase() {
        return new CreateContactUseCase(repository);
    }
}
