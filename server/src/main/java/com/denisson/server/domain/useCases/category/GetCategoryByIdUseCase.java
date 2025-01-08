package com.denisson.server.domain.useCases.category;

import java.util.Optional;

import com.denisson.server.domain.entities.Category;
import com.denisson.server.domain.exceptions.IdNotFoundException;
import com.denisson.server.domain.ports.IRepositoryCategory;

public class GetCategoryByIdUseCase {
    private final IRepositoryCategory repository;

    public GetCategoryByIdUseCase(IRepositoryCategory repository) {
        this.repository = repository;
    }

    public Optional<Category> execute(Long id) {
        if (!repository.existsId(id)) {
            throw new IdNotFoundException(id);
        }

        return repository.findById(id);
    }
}
