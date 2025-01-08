package com.denisson.server.domain.exceptions;

public class EntityNotValidException extends RuntimeException{

    public EntityNotValidException(Object entity) {
        super(String.format("Entity %s is not valid!", entity.getClass().getSimpleName()));
    }
}
