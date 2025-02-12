import React, { useContext } from 'react';
import { BasketContext } from '../../../context/BasketContext';
import { FavoritesContext } from '../../../context/FavoritesContext';
import styles from './header.module.css'

export const Header = ({ setActiveComponent, activeComponent }) => {

    const { totalQuantity } = useContext(BasketContext);
    const { favoritesCount } = useContext(FavoritesContext)

    return (
        <div className={styles.containerHeader}>
            <header className={styles.header}>
                <div className={styles.leftSide}>
                    <div className={styles.logoContainer}>
                        <div className={styles.burgerMenu}>
                            <input type='checkbox' className={styles.burgerCheckbox} id='burger-checkbox' />
                            <label className={styles.burger} htmlFor='burger-checkbox'></label>
                        </div>
                        <div className={styles.logo}>
                            <img src='./icons/logo.svg' alt='Logo' />
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuItem}>
                            <span>Home</span>
                        </div>
                        <div className={styles.menuItem}>
                            <span>Pages</span>
                            <img src='./icons/arrow.svg' alt='Arrow' className={styles.arrowDefault} />
                            <img src='./icons/arrow-pink.svg' alt='Arrow Pink' className={styles.arrowHover} />
                        </div>
                        <div className={`${styles.menuItem} ${activeComponent === 'shop'? styles.active : ''}`}
                         onClick={() => setActiveComponent('shop')}>
                            <span>Shop</span>
                            <img src='./icons/arrow.svg' alt='Arrow' className={styles.arrowDefault} />
                            <img src='./icons/arrow-pink.svg' alt='Arrow Pink' className={styles.arrowHover} />
                        </div>
                        <div className={styles.menuItem}>
                            <span>Blog</span>
                        </div>
                        <div className={styles.menuItem}>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.headerIcon}>
                        <img src='./icons/search.svg' alt='Search' />
                    </div>
                    <div className={styles.headerIcon}>
                        <img src='./icons/profile.svg' alt='Profile' />
                    </div>
                    <div className={styles.headerIcon}>
                        <img src='./icons/favorites.svg' alt='Favorites' />
                        <div className={styles.counter}>{favoritesCount}</div>
                    </div>
                    <div className={styles.headerIcon} onClick={() => setActiveComponent("cart")}>
                        <img src='./icons/cart.svg' alt='Cart' />
                        <div className={styles.counter}>{totalQuantity}</div>
                    </div>
                </div>
            </header>
        </div>
    );
};