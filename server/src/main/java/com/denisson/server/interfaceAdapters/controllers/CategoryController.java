package com.denisson.server.interfaceAdapters.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.server.domain.entities.Category;
import com.denisson.server.domain.exceptions.EntityNotValidException;
import com.denisson.server.domain.useCases.category.CreateCategoryUseCase;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("categories")
public class CategoryController {
    
    @Autowired
    CreateCategoryUseCase createCategoryUseCase;

    @PostMapping()
    public ResponseEntity<?> postMethod(@RequestBody Category category) {
        try {
            if(category.getName().isEmpty() || category.getImage().isEmpty()) {
                throw new EntityNotValidException(category);
            }

            Category createdCategory = createCategoryUseCase.execute(category);

            return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    
}
