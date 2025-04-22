package com.example.Campus_services_Portal.model;

import jakarta.persistence.*;

public class User {
    
    @Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.JOINED)
public class user {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Enumerated(EnumType.STRING)
    private UserRole role;
    
    // Other fields (name, status, etc.)
    // Getters and setters
}

public enum UserRole {
    STUDENT, LECTURER, ADMIN, STAFF
}
}
