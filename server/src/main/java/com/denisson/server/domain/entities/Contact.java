package com.denisson.server.domain.entities;

import org.springframework.data.annotation.Id;

public class Contact {
    @Id
    private Long id;
    private String your_name;
    private String email_address;
    private String subject;
    private String message;

    public Contact(Long id, String your_name, String email_address, String subject, String message) {
        this.id = id;
        this.your_name = your_name;
        this.email_address = email_address;
        this.subject = subject;
        this.message = message;
    }

    public Contact() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getYour_name() {
        return your_name;
    }

    public void setYour_name(String your_name) {
        this.your_name = your_name;
    }

    public String getEmail_address() {
        return email_address;
    }

    public void setEmail_address(String email_address) {
        this.email_address = email_address;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
}
