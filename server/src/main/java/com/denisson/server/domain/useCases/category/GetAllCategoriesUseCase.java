package com.denisson.server.domain.useCases.category;

import java.util.List;

import com.denisson.server.domain.entities.Category;
import com.denisson.server.domain.ports.IRepositoryCategory;

public class GetAllCategoriesUseCase {
    private final IRepositoryCategory repository;

    public GetAllCategoriesUseCase(IRepositoryCategory repository) {
        this.repository = repository;
    }

    public List<Category> execute() {
        return repository.findAll();
    }
}
