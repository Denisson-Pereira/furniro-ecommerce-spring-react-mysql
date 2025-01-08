package com.denisson.server.interfaceAdapters.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.server.domain.entities.Category;
import com.denisson.server.domain.exceptions.EntityNotValidException;
import com.denisson.server.domain.useCases.category.CreateCategoryUseCase;
import com.denisson.server.domain.useCases.category.DeleteCategoryByIdUseCase;
import com.denisson.server.domain.useCases.category.GetAllCategoriesUseCase;
import com.denisson.server.domain.useCases.category.GetCategoryByIdUseCase;
import com.denisson.server.domain.useCases.category.UpdateCategoryUseCase;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("categories")
public class CategoryController {
    
    @Autowired
    CreateCategoryUseCase createCategoryUseCase;
    @Autowired
    GetAllCategoriesUseCase getAllCategoriesUseCase;
    @Autowired
    GetCategoryByIdUseCase getCategoryByIdUseCase;
    @Autowired
    UpdateCategoryUseCase updateCategoryUseCase;
    @Autowired
    DeleteCategoryByIdUseCase deleteCategoryByIdUseCase;

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

    @GetMapping()
    public List<Category> getMethod() {
        return getAllCategoriesUseCase.execute();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getMethodById(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(getCategoryByIdUseCase.execute(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
        
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> postMethodName(@PathVariable Long id, @RequestBody Category category) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(updateCategoryUseCase.execute(id, category));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMethod(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(deleteCategoryByIdUseCase.execute(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
}
