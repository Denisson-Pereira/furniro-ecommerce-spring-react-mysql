package com.denisson.server.domain.useCases.products;

import com.denisson.server.domain.entities.Product;
import com.denisson.server.domain.exceptions.IdNotFoundException;
import com.denisson.server.domain.ports.IRepositoryProduct;

public class GetProductByIdUseCase {
    private final IRepositoryProduct repository;

    public GetProductByIdUseCase(IRepositoryProduct repository) {
        this.repository = repository;
    }

    public Product execute(Long id) {
        if (!repository.existsId(id)) {
            throw new IdNotFoundException(id);
        }

        return repository.findById(id);
    }
}
