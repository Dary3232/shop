import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../../../../context/ProductsContext';
import styles from './reviewedProducts.module.css';

export const ReviewedProducts = () => {
    const { products } = useContext(ProductsContext);
    const [randomProducts, setRandomProducts] = useState([]);

    const getRandomProducts = (products, count) => {
        const newProducts = [...products];
        const randProducts = [];
        do {
            const randomNumber = Math.floor(Math.random() * newProducts.length);
            randProducts.push(newProducts.splice(randomNumber, 1)[0]);
        } while (randProducts.length < count && newProducts.length > 0);

        return randProducts;
    };

    if (products.length > 0 && randomProducts.length === 0) {
        setRandomProducts(getRandomProducts(products, 3));
    }

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Reviewed By You</div>
            <div className={styles.reviewedProducts}>
                {randomProducts.map((product, index) => (
                    <div className={styles.reviewedProduct} key={index}>
                        <div className={styles.image}>
                            <img src={product.image}
                                className={styles.productImage}
                                alt={product.name}
                            />
                        </div>
                        <div className={styles.reviewedInfo}>
                            <div className={styles.nameProduct}>{product.name}</div>
                            <div className={styles.price}>
                                <div className={styles.currentPrice}>${product.price}</div>
                                {product.oldPrice ? <div className={styles.oldPrice}>${product.oldPrice}</div> : ''}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
