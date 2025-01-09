package com.denisson.server.interfaceAdapters.dtos;

public record RegisterDTO(
    String first_name,
    String last_name,
    String email,
    String password
) {}
