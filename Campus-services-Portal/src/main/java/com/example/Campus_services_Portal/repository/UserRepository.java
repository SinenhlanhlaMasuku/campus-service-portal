package com.example.Campus_services_Portal.repository;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.example.Campus_services_Portal.model.User;
import com.example.Campus_services_Portal.model.User.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Find user by email (for login)
    Optional<User> findByEmail(String email);

    // Find all users by role
    List<User> findByRole(UserRole role);

    // Check if email exists (for registration validation)
    boolean existsByEmail(String email);

    // Find active users
    @Query("SELECT u FROM User u WHERE u.active = true")
    List<User> findAllActiveUsers();

    // Find users by name pattern
    @Query("SELECT u FROM User u WHERE LOWER(u.firstName) LIKE LOWER(concat('%', :name, '%')) OR " +
           "LOWER(u.lastName) LIKE LOWER(concat('%', :name, '%'))")
    List<User> searchByName(String name);

    // Find users with upcoming bookings
    @Query("SELECT DISTINCT u FROM User u JOIN u.bookings b WHERE b.startTime > CURRENT_TIMESTAMP")
    List<User> findUsersWithUpcomingBookings();
}
