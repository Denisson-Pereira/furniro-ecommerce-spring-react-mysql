package com.denisson.server.interfaceAdapters.gateways;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.server.domain.entities.Product;
import com.denisson.server.domain.ports.IRepositoryProduct;

@Repository
public class RepositoryProductImpl implements IRepositoryProduct {

    private final JdbcTemplate jdbcTemplate;


    public RepositoryProductImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public final RowMapper<Product> rowMapper = (rs, rowNum) -> new Product(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("description"),
        rs.getString("image"),
        rs.getString("category"),
        rs.getString("price")
    );

    @Override
    public List<Product> findAll() {
        String sql = "SELECT * FROM products";
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Product findById(Long id) {
        String sql = "SELECT * FROM products WHERE id = ?";
        return jdbcTemplate.query(sql, rowMapper, id)
        .stream()
        .findFirst()
        .orElseThrow(() -> new RuntimeException("Product not found for id: " + id));
    }

    @Override
    public Product save(Product product) {
        if (product.getId() != null && existsId(product.getId())) {
            String sql = "UPDATE products SET name = ?, description = ?, image = ?, category = ?, price = ? WHERE id = ?";
            jdbcTemplate.update(sql, product.getName(), product.getDescription(), product.getImage(), product.getCategory(), product.getPrice(), product.getId());
        } else {
            String sql = "INSERT INTO products (name, description, image, category, price) VALUES (?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql, product.getName(), product.getDescription(), product.getImage(), product.getCategory(), product.getPrice());
        }

        return product;
    }

    @Override
    public void delete(Long id) {
        String sql = "DELETE FROM products WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public boolean existsName(String name) {
        String sql = "SELECT COUNT(*) FROM products WHERE name = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, name);
        return count != null && count > 0;
    }

    @Override
    public boolean existsId(Long id) {
        String sql = "SELECT COUNT(*) FROM products WHERE id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count > 0;
    }
    
}
