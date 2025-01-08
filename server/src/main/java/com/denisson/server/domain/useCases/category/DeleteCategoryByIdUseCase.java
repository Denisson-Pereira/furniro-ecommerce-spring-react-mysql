package com.denisson.server.domain.useCases.category;

import com.denisson.server.domain.exceptions.IdNotFoundException;
import com.denisson.server.domain.ports.IRepositoryCategory;

public class DeleteCategoryByIdUseCase {
    final private IRepositoryCategory repository;

    public DeleteCategoryByIdUseCase(IRepositoryCategory repository) {
        this.repository = repository;
    }

    public String execute(Long id) {
        if (!repository.existsId(id)) {
            throw new IdNotFoundException(id);
        }

        repository.delete(id);
        return String.format("ID %s deleted successfully!", id);
    }
    
}
