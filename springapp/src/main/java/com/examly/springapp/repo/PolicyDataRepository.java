package com.examly.springapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
import com.examly.springapp.model.Policy;
=======
import com.examly.springapp.model.PolicyData;
>>>>>>> 396399b492c14bb29777d2482d5ff5a788644807

@Repository
public interface PolicyDataRepository extends JpaRepository<Policy, String> {
    // Add any additional repository methods if needed
    List<Policy> findAll();
}
