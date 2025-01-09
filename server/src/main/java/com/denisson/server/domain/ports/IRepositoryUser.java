package com.denisson.server.domain.ports;

import java.util.Optional;

import com.denisson.server.domain.entities.User;

public interface IRepositoryUser {
    Optional<User> findByEmail(String email);
    boolean existsEmail(String email);
    User save(User user);
}
