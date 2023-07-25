package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.entity.PolicyModel;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyModelRepository extends JpaRepository<PolicyModel, Long> {
    // Add any additional repository methods if needed
}