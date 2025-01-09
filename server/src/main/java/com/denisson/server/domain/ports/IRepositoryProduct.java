package com.denisson.server.domain.ports;

import java.util.List;

import com.denisson.server.domain.entities.Product;

public interface IRepositoryProduct {
    List<Product> findAll();
    Product findById(Long id);
    Product save(Product product);
    void delete(Long id);
    boolean existsName(String name);
    boolean existsId(Long id);
}
