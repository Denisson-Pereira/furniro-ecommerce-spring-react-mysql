package com.denisson.server.domain.useCases.category;

import com.denisson.server.domain.entities.Category;
import com.denisson.server.domain.exceptions.NameAlreadyExistsException;
import com.denisson.server.domain.ports.IRepositoryCategory;

public class CreateCategoryUseCase {
    private final IRepositoryCategory repository;

    public CreateCategoryUseCase(IRepositoryCategory repository) {
        this.repository = repository;
    }

    public Category execute(Category category) {
        if (repository.existsName(category.getName())) {
            throw new NameAlreadyExistsException(category.getName());
        }
        return repository.save(category);
    }
    
}
