package com.denisson.server.interfaceAdapters.gateways;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.server.domain.entities.User;
import com.denisson.server.domain.ports.IRepositoryUser;

@Repository
public class RepositoryUserImpl implements IRepositoryUser{
    private final JdbcTemplate jdbcTemplate;

    public RepositoryUserImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public final RowMapper<User> rowMapper = (rs, rowMapper) -> new User(
        rs.getLong("id"),
        rs.getString("first_name"),
        rs.getString("last_name"),
        rs.getString("email"),
        rs.getString("password"),
        rs.getString("phone"),
        rs.getString("country"),
        rs.getString("state"),
        rs.getString("city"),
        rs.getString("street"),
        rs.getString("image"),
        rs.getString("role")
    );

    @Override
    public Optional<User> findByEmail(String email) {
        String sql = "SELECT * FROM users WHERE email = ?";
        return jdbcTemplate.query(sql, rowMapper, email)
            .stream()
            .findFirst();
    }

    @Override
    public boolean existsEmail(String email) {
        String sql = "SELECT COUNT(*) FROM users WHERE email = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, email);
        return count != null && count > 0;
    }

    @Override
    public User save(User user) {
        String sql = "INSERT INTO users (first_name, last_name, email, password, phone, country, state, city, street, image, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getFirst_name(), user.getLast_name(), user.getEmail(), user.getPassword(), user.getPhone(), user.getCountry(), user.getState(), user.getCity(), user.getStreet(), user.getImage(), user.getRole());

        return user;
    }
    
}
