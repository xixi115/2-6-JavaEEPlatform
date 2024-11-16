package cn.edu.xmu.javaee.productdemoaop.jpa.entity;

import cn.edu.xmu.javaee.productdemoaop.dao.bo.OnSale;
import cn.edu.xmu.javaee.productdemoaop.dao.bo.Product;
import cn.edu.xmu.javaee.productdemoaop.dao.bo.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "goods_product")
public class ProductEntity {
    /**
     * 代理对象
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Transient
    private List<ProductEntity> otherProduct = new ArrayList<>();
    @Transient
    private List<OnsaleEntity> onSaleList = new ArrayList<>();

    private String skuSn;

    private String name;

    private Long originalPrice;

    private Long weight;

    private String barcode;

    private String unit;

    private String originPlace;

    private Integer commissionRatio;
    private Long goodsId;

    private Long freeThreshold;

    private Byte status;

    @Transient
    private User creator;
    @Transient
    private User modifier;

    private LocalDateTime gmtCreate;

    private LocalDateTime gmtModified;
}
