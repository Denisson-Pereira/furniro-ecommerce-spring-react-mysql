package com.denisson.server.drivers;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.server.domain.ports.IRepositoryCategory;
import com.denisson.server.domain.useCases.category.CreateCategoryUseCase;

@Configuration
public class CategoryConf {
    
    @Bean
    public CreateCategoryUseCase createCategoryUseCase(IRepositoryCategory repositoryCategory) {
        return new CreateCategoryUseCase(repositoryCategory);
    }
}
