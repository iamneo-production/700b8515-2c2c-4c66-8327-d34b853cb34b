package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.entity.Review;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    // Add any additional repository methods if needed
}