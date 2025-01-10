package com.denisson.server.domain.useCases.user;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.denisson.server.domain.entities.User;
import com.denisson.server.domain.ports.IRepositoryUser;
import com.denisson.server.drivers.jwt.JwtService;
import com.denisson.server.interfaceAdapters.dtos.LoginDTO;
import com.denisson.server.interfaceAdapters.dtos.LoginReturnDTO;

@Component
public class AuthenticateUser {
    private final IRepositoryUser userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthenticateUser(IRepositoryUser userRepository, JwtService jwtService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public LoginReturnDTO authenticate(LoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.email())
            .orElseThrow(() -> new UsernameNotFoundException("Invalid e-mail!"));

        if (!passwordEncoder.matches(loginDTO.password(), user.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        String token = jwtService.generateToken(user);

        return new LoginReturnDTO(user, token);
    }
    
}
