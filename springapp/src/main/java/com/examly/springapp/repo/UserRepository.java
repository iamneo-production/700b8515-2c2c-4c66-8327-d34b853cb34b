package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.entity.UserModel;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findByEmail(String email);
    UserModel findByEmailAndUserRole(String email, String userRole);
}
