package com.denisson.server.interfaceAdapters.gateways;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.server.domain.entities.Category;
import com.denisson.server.domain.ports.IRepositoryCategory;

@Repository
public class RepositoryCategoryImpl implements IRepositoryCategory {

    private final JdbcTemplate jdbcTemplate;

    public RepositoryCategoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public final RowMapper<Category> rowMapper = (rs, rowNum) -> new Category(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("description"),
        rs.getString("image")
    );

    @Override
    public List<Category> findAll() {
        String sql = "SELECT * FROM categories";
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Category save(Category category) {
        if(category.getId() != null && existsId(category.getId())) {
            String sql = "UPDATE categories SET name = ?, description = ?, image = ? WHERE id = ?";
            jdbcTemplate.update(sql, category.getName(), category.getDescription(), category.getImage(), category.getId());
        } else {
            String sql = "INSERT INTO categories (name, description, image) VALUES (?, ?, ?)";
            jdbcTemplate.update(sql, category.getName(), category.getDescription(), category.getImage());
        }
        
        return category;
    }

    @Override
    public boolean existsName(String name) {
        String sql = "SELECT COUNT(*) FROM categories WHERE name = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, name);
        return count != null && count > 0;
    }

    @Override
    public Category findById(Long id) {
        String sql = "SELECT * FROM categories WHERE id = ?";
        return jdbcTemplate.query(sql, rowMapper, id)
            .stream()
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Category not found for id: " + id));
    }

    @Override
    public boolean existsId(Long id) {
        String sql = "SELECT count(*) FROM categories WHERE id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count > 0;
    }

    @Override
    public void delete(Long id) {
        String sql = "DELETE FROM categories WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }
    
}
