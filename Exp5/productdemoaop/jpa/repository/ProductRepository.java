package cn.edu.xmu.javaee.productdemoaop.jpa.repository;

import cn.edu.xmu.javaee.productdemoaop.jpa.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    List<ProductEntity> findByName(String name);
    List<ProductEntity> findByGoodsIdAndIdNot(Long goodsId, Long id);
}
