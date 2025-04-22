package com.example.Campus_services_Portal.repository;

import java.time.*;
import java.util.*;

import org.springframework.data.jpa.repository.*;

import org.springframework.stereotype.Repository;

import com.example.Campus_services_Portal.model.*;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    // Find rooms by building
    List<Room> findByBuilding(String building);

    // Find rooms by type (lecture hall, lab, etc.)
    // List<Room> findByType(RoomType type);

    // Find rooms with capacity greater than or equal to
    List<Room> findByCapacityGreaterThanEqual(int minCapacity);

    // Find available rooms between time range
    @Query("SELECT r FROM Room r WHERE r.id NOT IN " +
           "(SELECT b.room.id FROM Booking b WHERE " +
           "b.status <> 'CANCELLED' AND " +
           "((b.startTime < :endTime) AND (b.endTime > :startTime)))")
    List<Room> findAvailableRooms(LocalDateTime startTime, LocalDateTime endTime);

    // Find rooms with specific equipment
    @Query("SELECT r FROM Room r JOIN r.equipment e WHERE e.name = :equipmentName")
    List<Room> findByEquipment(String equipmentName);

    // Find rooms by building and floor
    List<Room> findByBuildingAndFloor(String building, String floor);
}
