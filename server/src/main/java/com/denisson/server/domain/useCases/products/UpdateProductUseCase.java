package com.denisson.server.domain.useCases.products;

import com.denisson.server.domain.entities.Product;
import com.denisson.server.domain.exceptions.IdNotFoundException;
import com.denisson.server.domain.ports.IRepositoryProduct;

public class UpdateProductUseCase {
    private final IRepositoryProduct repository;

    public UpdateProductUseCase(IRepositoryProduct repository) {
        this.repository = repository;
    }

    public Product execute(Long id, Product product) {
        if (!repository.existsId(id)) {
            throw new IdNotFoundException(id);
        }

        Product existingProduct = repository.findById(id);

        existingProduct.setName(product.getName());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setImage(product.getImage());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setPrice(product.getPrice());

        return repository.save(existingProduct);
    }
}
