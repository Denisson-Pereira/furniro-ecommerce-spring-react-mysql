package com.denisson.server.domain.useCases.products;

import java.util.List;

import com.denisson.server.domain.entities.Product;
import com.denisson.server.domain.ports.IRepositoryProduct;

public class GetAllProductsUseCase {
    private final IRepositoryProduct repository;

    public GetAllProductsUseCase(IRepositoryProduct repository) {
        this.repository = repository;
    }

    public List<Product> execute() {
        return repository.findAll();
    }
    
}
