package cn.edu.xmu.javaee.productdemoaop.jpa.repository;

import cn.edu.xmu.javaee.productdemoaop.jpa.entity.OnsaleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OnsaleRepository extends JpaRepository<OnsaleEntity, Long> {

    List<OnsaleEntity> findByProductIdAndBeginTimeBeforeAndEndTimeAfter(Long productId, LocalDateTime beginTime, LocalDateTime endTime);
}

