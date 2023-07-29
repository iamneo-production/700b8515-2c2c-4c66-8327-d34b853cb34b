package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.entity.DocumentModel;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<DocumentModel, Long> {
    // Add any additional repository methods if needed
}
