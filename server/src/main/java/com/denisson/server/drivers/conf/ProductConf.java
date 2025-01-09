package com.denisson.server.drivers.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.server.domain.ports.IRepositoryProduct;
import com.denisson.server.domain.useCases.products.CreateProductUseCase;
import com.denisson.server.domain.useCases.products.DeleteProductByIdUseCase;
import com.denisson.server.domain.useCases.products.GetAllProductsUseCase;
import com.denisson.server.domain.useCases.products.GetProductByIdUseCase;
import com.denisson.server.domain.useCases.products.UpdateProductUseCase;

@Configuration
public class ProductConf {
    
    private final IRepositoryProduct repository;

    public ProductConf(IRepositoryProduct repository) {
        this.repository = repository;
    }

    @Bean
    public CreateProductUseCase createProductUseCase() {
        return new CreateProductUseCase(repository);
    }

    @Bean
    public GetAllProductsUseCase getAllProductsUseCase() {
        return new GetAllProductsUseCase(repository);
    }

    @Bean
    public GetProductByIdUseCase getProductByIdUseCase() {
        return new GetProductByIdUseCase(repository);
    }

    @Bean 
    public UpdateProductUseCase updateProductUseCase() {
        return new UpdateProductUseCase(repository);
    }

    @Bean
    public DeleteProductByIdUseCase deleteProductByIdUseCase() {
        return new DeleteProductByIdUseCase(repository);
    }
    
}
