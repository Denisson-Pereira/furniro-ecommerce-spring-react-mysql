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
        String sql = "INSERT INTO categories (name, description, image) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, category.getName(), category.getDescription(), category.getImage());

        return category;
    }
    
}
