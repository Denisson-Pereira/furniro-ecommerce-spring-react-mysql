package com.denisson.server.interfaceAdapters.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.server.domain.entities.Product;
import com.denisson.server.domain.exceptions.EntityNotValidException;
import com.denisson.server.domain.useCases.products.CreateProductUseCase;
import com.denisson.server.domain.useCases.products.DeleteProductByIdUseCase;
import com.denisson.server.domain.useCases.products.GetAllProductsUseCase;
import com.denisson.server.domain.useCases.products.GetProductByIdUseCase;
import com.denisson.server.domain.useCases.products.UpdateProductUseCase;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("products")
public class ProductController {

    @Autowired
    CreateProductUseCase createProductUseCase;
    @Autowired
    GetAllProductsUseCase getAllProductsUseCase;
    @Autowired
    GetProductByIdUseCase getProductByIdUseCase;
    @Autowired
    UpdateProductUseCase updateProductUseCase;
    @Autowired
    DeleteProductByIdUseCase deleteProductByIdUseCase;

    @PostMapping()
    public ResponseEntity<?> postMethod(@RequestBody Product product) {
        try {
            if(product.getName().isEmpty() || product.getImage().isEmpty()) {
                throw new EntityNotValidException(product);
            }

            Product createdProduct = createProductUseCase.execute(product);

            return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping()
    public List<Product> getMethod() {
        return getAllProductsUseCase.execute();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getMethodById(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(getProductByIdUseCase.execute(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> putMethod(@PathVariable Long id, @RequestBody Product product) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(updateProductUseCase.execute(id, product));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMethod(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(deleteProductByIdUseCase.execute(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
}
