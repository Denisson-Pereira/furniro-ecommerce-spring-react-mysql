package com.denisson.server.interfaceAdapters.gateways;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.server.domain.entities.Contact;
import com.denisson.server.domain.ports.IRepositoryContact;

@Repository
public class RepositoryContactImpl implements IRepositoryContact{

    private final JdbcTemplate jdbcTemplate;

    public RepositoryContactImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public final RowMapper<Contact> rowMapper = (rs, rowNum) -> new Contact(
        rs.getLong("id"),
        rs.getString("your_name"),
        rs.getString("email_address"),
        rs.getString("subject"),
        rs.getString("message")
    );

    @Override
    public Contact save(Contact contact) {
        String sql = "INSERT INTO contact (your_name, email_address, subject, message) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, contact.getYour_name(), contact.getEmail_address(), contact.getSubject(), contact.getMessage());
        return contact;
    }
    
}
