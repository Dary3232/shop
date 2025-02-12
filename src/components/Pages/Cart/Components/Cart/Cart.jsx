import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import { Order } from '../Order/Order';
import { PromoCodeWrapper } from '../PromoCodeWrapper/PromoCodeWrapper';
import styles from './cart.module.css'

export const Cart = () => {
    return (
        <div>
            <div className={styles.containerCart}>
                <div className={styles.cart}>
                    <div className={styles.orderWrapper}>
                        <ProductList />
                        <Order />
                    </div>
                </div>
                <PromoCodeWrapper />
            </div>
        </div>
    );
};


