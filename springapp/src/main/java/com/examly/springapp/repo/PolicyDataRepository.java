package com.examly.springapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.PolicyData;

@Repository
public interface PolicyDataRepository extends JpaRepository<PolicyData, String> {
    // Add any additional repository methods if needed
    List<PolicyData> findAll();
}
