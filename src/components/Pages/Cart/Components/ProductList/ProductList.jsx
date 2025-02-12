import React, { useContext } from 'react';
import { Product } from '../Product/Product';
import { BasketContext } from '../../../../../context/BasketContext';
import styles from './productList.module.css';

export const ProductList = () => {
    const { productsInBasket, updateBasket, removeFromBasket } = useContext(BasketContext);

    const handleQuantityChange = (id, change) => {
        const updatedProducts = productsInBasket
            .map(product => (product.id === id ? { ...product, quantity: product.quantity + change } : product))
            .filter(product => product.quantity > 0);
        updateBasket(updatedProducts);
    };

    return (
        <div className={styles.productList}>
            {productsInBasket.length > 0 ? (
                productsInBasket.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        onRemove={removeFromBasket}
                        onQuantityChange={handleQuantityChange}
                    />
                ))
            ) : (
                <div>No products in basket</div>
            )}
        </div>
    );
};




