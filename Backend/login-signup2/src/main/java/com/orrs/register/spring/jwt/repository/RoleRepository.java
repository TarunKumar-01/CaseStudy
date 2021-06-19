package com.orrs.register.spring.jwt.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.orrs.register.spring.jwt.model.ERole;
import com.orrs.register.spring.jwt.model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}