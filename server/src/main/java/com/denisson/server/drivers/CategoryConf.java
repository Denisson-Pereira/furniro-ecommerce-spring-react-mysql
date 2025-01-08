package com.denisson.server.drivers;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.server.domain.ports.IRepositoryCategory;
import com.denisson.server.domain.useCases.category.CreateCategoryUseCase;
import com.denisson.server.domain.useCases.category.DeleteCategoryByIdUseCase;
import com.denisson.server.domain.useCases.category.GetAllCategoriesUseCase;
import com.denisson.server.domain.useCases.category.GetCategoryByIdUseCase;

@Configuration
public class CategoryConf {
    
    private final IRepositoryCategory repository;

    public CategoryConf(IRepositoryCategory repository) {
        this.repository = repository;
    }

    @Bean
    public CreateCategoryUseCase createCategoryUseCase() {
        return new CreateCategoryUseCase(repository);
    }

    @Bean
    public GetAllCategoriesUseCase getAllCategoriesUseCase() {
        return new GetAllCategoriesUseCase(repository);
    }

    @Bean
    public GetCategoryByIdUseCase getCategoryByIdUseCase() {
        return new GetCategoryByIdUseCase(repository);
    }

    @Bean
    public DeleteCategoryByIdUseCase deleteCategoryByIdUseCase() {
        return new DeleteCategoryByIdUseCase(repository);
    }
}
