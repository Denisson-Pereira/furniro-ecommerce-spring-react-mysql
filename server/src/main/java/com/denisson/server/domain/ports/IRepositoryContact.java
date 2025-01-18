package com.denisson.server.domain.ports;

import com.denisson.server.domain.entities.Contact;

public interface IRepositoryContact {
    Contact save(Contact contact);    
}
