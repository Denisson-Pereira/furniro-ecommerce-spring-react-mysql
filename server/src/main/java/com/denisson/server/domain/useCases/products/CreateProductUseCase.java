package com.denisson.server.domain.useCases.products;

import com.denisson.server.domain.entities.Product;
import com.denisson.server.domain.exceptions.NameAlreadyExistsException;
import com.denisson.server.domain.ports.IRepositoryProduct;

public class CreateProductUseCase {
    private final IRepositoryProduct repository;

    public CreateProductUseCase(IRepositoryProduct repository) {
        this.repository = repository;
    }

    public Product execute(Product product) {
        if (repository.existsName(product.getName())) {
            throw new NameAlreadyExistsException(product.getName());
        }

        return repository.save(product);
    }

}
