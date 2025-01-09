package com.denisson.server;

import com.denisson.server.domain.entities.Product;
import com.denisson.server.domain.exceptions.NameAlreadyExistsException;
import com.denisson.server.domain.ports.IRepositoryProduct;
import com.denisson.server.domain.useCases.products.CreateProductUseCase;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CreateProductUseCaseTest {

    private IRepositoryProduct repository;
    private CreateProductUseCase useCase;

    @BeforeEach
    void setUp() {
        repository = mock(IRepositoryProduct.class); // criação do mock
        useCase = new CreateProductUseCase(repository); // instancia do caso de uso
    }

    @Test
    void shouldSaveProductWhenNameDoesNotExist() {
        Product product = new Product(1L, "Name Product", "Description product", "image", "category","25000");
        when(repository.existsName(product.getName())).thenReturn(false); // simulação do comportamento do mock
        when(repository.save(product)).thenReturn(product);

        Product savedProduct = useCase.execute(product);

        assertEquals(product, savedProduct);
        verify(repository).existsName(product.getName()); // verifica se o método existsName foi chamado
        verify(repository).save(product); // verifica se o método save foi chamado
    }

    @Test
    void shouldThrowExceptionWhenNameAlreadyExists() {
        // Arrange
        Product product = new Product(1L, "Name Product", "Description product", "image", "category","25000");
        when(repository.existsName(product.getName())).thenReturn(true);

        // Act & Assert
        NameAlreadyExistsException exception = assertThrows(
                NameAlreadyExistsException.class,
                () -> useCase.execute(product)
        );

        assertEquals("This name Name Product already exists!", exception.getMessage());
        verify(repository).existsName(product.getName()); // verifica se o metodo existsName foi chamado
        verify(repository, never()).save(product); // garante que save nunca foi chamado
    }
}