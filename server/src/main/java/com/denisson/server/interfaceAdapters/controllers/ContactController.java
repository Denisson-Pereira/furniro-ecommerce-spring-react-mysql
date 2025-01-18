package com.denisson.server.interfaceAdapters.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.denisson.server.domain.entities.Contact;
import com.denisson.server.domain.exceptions.EntityNotValidException;
import com.denisson.server.domain.useCases.contact.CreateContactUseCase;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("contact")
public class ContactController {

    @Autowired
    CreateContactUseCase createContactUseCase;

    @PostMapping()
    public ResponseEntity<?> postMethod(@RequestBody Contact contact) {
        try {
            if (contact.getEmail_address().isEmpty() || contact.getMessage().isEmpty()) {
                throw new EntityNotValidException(contact);
            }

            Contact createContact = createContactUseCase.execute(contact);

            return ResponseEntity.status(HttpStatus.CREATED).body(createContact);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    
    
}
