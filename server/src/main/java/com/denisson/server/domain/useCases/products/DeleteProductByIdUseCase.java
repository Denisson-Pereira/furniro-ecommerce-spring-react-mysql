package com.denisson.server.domain.useCases.products;

import com.denisson.server.domain.exceptions.IdNotFoundException;
import com.denisson.server.domain.ports.IRepositoryProduct;

public class DeleteProductByIdUseCase {
    private final IRepositoryProduct repository;

    public DeleteProductByIdUseCase(IRepositoryProduct repository) {
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
