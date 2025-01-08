package com.denisson.server.domain.useCases.category;

import com.denisson.server.domain.entities.Category;
import com.denisson.server.domain.exceptions.IdNotFoundException;
import com.denisson.server.domain.ports.IRepositoryCategory;

public class UpdateCategoryUseCase {
    final private IRepositoryCategory repository;


    public UpdateCategoryUseCase(IRepositoryCategory repository) {
        this.repository = repository;
    }


    public Category execute(Long id, Category category) {
        if (!repository.existsId(id)) {
            throw new IdNotFoundException(id);
        }

        Category existingCategory = repository.findById(id);

        existingCategory.setName(category.getName());
        existingCategory.setDescription(category.getDescription());
        existingCategory.setImage(category.getImage());

        return repository.save(existingCategory);
    }
}
