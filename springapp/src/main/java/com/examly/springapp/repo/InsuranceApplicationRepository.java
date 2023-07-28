package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.entity.InsuranceApplication;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceApplicationRepository extends JpaRepository<InsuranceApplication, Long> {
    // Add any additional repository methods if needed
}
