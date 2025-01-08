package com.denisson.server.domain.ports;

import java.util.List;

import com.denisson.server.domain.entities.Category;

public interface IRepositoryCategory {
    List<Category> findAll();
    Category findById(Long id);
    Category save(Category category);
    void delete(Long id);
    boolean existsName(String name);
    boolean existsId(Long id);
}
