import React, { useContext } from 'react';
import { FavoritesContext } from '../../../../../context/FavoritesContext';
import { BasketContext } from '../../../../../context/BasketContext';
import styles from './product.module.css';

export const Product = ({ product }) => {

    const { toggleFavorite, productsInFavorites } = useContext(FavoritesContext);
    const { addToBasket } = useContext(BasketContext);

    const buyProduct = (product) => {
        addToBasket(product);
    };

    return (
        <div className={styles.product} data-product-id={product.id}>
            <div className={styles.photo} onClick={() => buyProduct(product)}>
                <div className={styles.topBar}>
                    <div className={styles.labels}>
                        {(product.isSale || product.isNew) && (
                            <div className={`${styles.label} ${product.isSale ? styles.sale : styles.new}`}>
                                {product.isSale ? 'Sale' : 'New'}
                            </div>
                        )}
                    </div>
                    <div className={styles.favorites} onClick={() => toggleFavorite(product)}>
                        <img
                            src={productsInFavorites.some(item => item.id === product.id) ?
                                './icons/favorites-red.svg' : './icons/favorites.svg'}
                            alt='Favorite Icon'
                        />
                    </div>
                </div>
                <img src={product.image} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.price}>
                    <div className={styles.currentPrice}>${product.price}</div>
                    <div className={styles.oldPrice}>{product.oldPrice !== null ? '$' + product.oldPrice : ''}</div>
                </div>
            </div>
        </div>
    );
};
