package com.denisson.server.domain.useCases.user;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.denisson.server.domain.entities.User;
import com.denisson.server.domain.ports.IRepositoryUser;
import com.denisson.server.interfaceAdapters.dtos.RegisterDTO;

@Component
public class RegisterUser {
    private final IRepositoryUser userRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterUser(IRepositoryUser userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(RegisterDTO registerDTO) {
        if (userRepository.findByEmail(registerDTO.email()).isPresent()) {
            throw new IllegalArgumentException("E-mail already exists!");
        }

        User user = new User();
        user.setFirst_name(registerDTO.first_name());
        user.setLast_name(registerDTO.last_name());
        user.setEmail(registerDTO.email());
        user.setPassword(passwordEncoder.encode(registerDTO.password()));

        return userRepository.save(user);
    }
    
}
