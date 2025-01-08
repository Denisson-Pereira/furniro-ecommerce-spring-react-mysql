package com.denisson.server.domain.exceptions;

public class NameAlreadyExistsException extends RuntimeException {
    public NameAlreadyExistsException(String name){
        super(String.format("This name %s already exists!", name));
    }
}
