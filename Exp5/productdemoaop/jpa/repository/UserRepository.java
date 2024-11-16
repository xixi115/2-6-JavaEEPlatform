package cn.edu.xmu.javaee.productdemoaop.jpa.repository;

import cn.edu.xmu.javaee.productdemoaop.jpa.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
