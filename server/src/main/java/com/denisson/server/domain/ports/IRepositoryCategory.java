package com.denisson.server.domain.ports;

import java.util.List;

import com.denisson.server.domain.entities.Category;

public interface IRepositoryCategory {
    List<Category> findAll();
    Category save(Category category);
}
