import React from 'react';
import styles from './product.module.css'

export const Product = ({ product, onRemove, onQuantityChange }) => {

  const gapStyle = !product.oldPrice ? { gap: '100px' } : {};

  return (
    <div className={styles.product}>
      <img src={product.image} className={styles.photo} alt={product.title} />
      <div className={styles.productInfo}>
        <div className={styles.titleCart}>{product.name}</div>
        <div className={styles.priceWrapper}>
          <div className={styles.priceAndQuantity} style={gapStyle}>
            <div className={styles.price}>
              <div className={styles.oldPrice}>{product.oldPrice !== null ? '$' + product.oldPrice : ''}</div>
              <div className={styles.currentPrice}>${product.price.toFixed(2)}</div>
            </div>
            <div className={styles.quantity}>
              <div className={styles.countButton} onClick={() => onQuantityChange(product.id, -1)}>-</div>
              <div className={styles.count}>{product.quantity}</div>
              <div className={styles.countButton} onClick={() => onQuantityChange(product.id, 1)}>+</div>
            </div>
          </div>
          <div className={styles.totalPrice}>${(product.price * product.quantity).toFixed(2)}</div>
          <div className={styles.close} onClick={() => onRemove(product.id)}>X</div>
        </div>
      </div>
    </div>
  );
};

