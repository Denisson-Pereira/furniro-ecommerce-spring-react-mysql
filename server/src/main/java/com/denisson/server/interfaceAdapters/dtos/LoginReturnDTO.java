package com.denisson.server.interfaceAdapters.dtos;

import com.denisson.server.domain.entities.User;

public record LoginReturnDTO(
    User user,
    String token
) {}
