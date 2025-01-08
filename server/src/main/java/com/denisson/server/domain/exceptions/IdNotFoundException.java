package com.denisson.server.domain.exceptions;

public class IdNotFoundException extends RuntimeException {
    public IdNotFoundException(Long id) {
        super(String.format("Id %s not found!", id));
    }
}
