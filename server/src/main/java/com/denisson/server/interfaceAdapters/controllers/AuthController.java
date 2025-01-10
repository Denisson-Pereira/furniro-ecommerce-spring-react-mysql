package com.denisson.server.interfaceAdapters.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.server.domain.entities.User;
import com.denisson.server.domain.useCases.user.AuthenticateUser;
import com.denisson.server.domain.useCases.user.RegisterUser;
import com.denisson.server.interfaceAdapters.dtos.LoginDTO;
import com.denisson.server.interfaceAdapters.dtos.RegisterDTO;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticateUser authenticateUser;
    private final RegisterUser registerUser;

    public AuthController(AuthenticateUser authenticateUser, RegisterUser registerUser) {
        this.authenticateUser = authenticateUser;
        this.registerUser = registerUser;
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginDTO loginDTO) {
        try {
            Object result = authenticateUser.authenticate(loginDTO);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage()); 
        }
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterDTO registerDTO) {
        User user = registerUser.register(registerDTO);
        return ResponseEntity.ok(user);
    }
    
    
}
