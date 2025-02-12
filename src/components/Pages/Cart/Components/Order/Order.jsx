import React, { useContext } from 'react';
import { BasketContext } from '../../../../../context/BasketContext';
import styles from './order.module.css';

export const Order = () => {
    const { productsInBasket, discountApplied } = useContext(BasketContext);

    const orderPrice = productsInBasket.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const deliveryPrice = orderPrice > 0 ? 16 : 0;
    const discount = discountApplied ? orderPrice * 0.2 : 0; 
    const totalPrice = orderPrice + deliveryPrice - discount;

    const handleChekoutClick = () => {
        if (totalPrice === 0) {
            alert('Корзина пуста! Добавьте товары для оформления заказа!');
        } 
        if (totalPrice > 0) {
            alert(`Ваш заказ на сумму $${totalPrice.toFixed(2)} успешно оформлен!`);
        }
    };

    return (
        <div className={styles.order}>
            <div className={styles.titleCart}>Your Order</div>
            <div className={styles.orderPriceWrapper}>
                <div className={styles.priceRow}>
                    <div className={styles.name}>Order price</div>
                    <div className={styles.price}>${orderPrice.toFixed(2)}</div>
                </div>
                <div className={styles.priceRow}>
                    <div className={styles.name}>Discount for promo code</div>
                    <div className={`${styles.price} ${styles.promo}`}>{discountApplied ? '20%' : 'No'}</div>
                </div>
            </div>
            <div className={`${styles.priceRow} ${styles.delimiter}`}>
                <div className={styles.name}>
                    Delivery
                    <span className={styles.additional}>(Aug 02 at 16:00)</span>
                </div>
                <div className={styles.price}>${deliveryPrice}</div>
            </div>
            <div className={`${styles.priceRow} ${styles.total}`}>
                <div className={styles.total}>Total</div>
                <div className={`${styles.price} ${styles.total}`}>${totalPrice.toFixed(2)}</div>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={handleChekoutClick}>Checkout</button>
                <div className={styles.verticalLineCart}></div>
            </div>
        </div>
    );
};



