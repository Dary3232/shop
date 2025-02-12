import React, { useState } from 'react';
import { Cart } from '../../Pages/Cart/Components/Cart/Cart';
import { Shop } from '../../Pages/Shop/Components/Shop/Shop';
import { Header } from '../Header/Header';
import { FilterProvider } from '../../../context/FilterContext';
import styles from './content.module.css';

export const Content = () => {

    const [activeComponent, setActiveComponent] = useState('shop');

    const renderActiveComponent = () => {
        if (activeComponent === 'cart') {
            return <Cart />;
        }
        if (activeComponent === 'shop') {
            return (
                <FilterProvider>
                    <Shop />
                </FilterProvider>
            );
        }
    };

    return (
        <>
            <Header setActiveComponent={setActiveComponent} activeComponent={activeComponent}  />
            <div className={styles.containerContent}>
                <div className={styles.box}>
                    <div className={styles.shopBox}>
                        <img src='./icons/line-shop-content.svg' alt='Line' className={styles.lineContent} />
                        <img src='./images/points-shop-cart.svg' alt='Points' className={styles.points} />
                        <div className={styles.elementsMenu}>
                            <div className={styles.shopHeading}>{activeComponent === 'cart' ? 'Cart' : 'Shop'}</div>
                            <div className={styles.shopMenu}>
                                <div className={styles.elementMenu}>Home</div>
                                <div
                                    className={`${styles.elementMenu} ${activeComponent === 'cart' ? styles.active : ''}`}
                                    onClick={() => {setActiveComponent('cart')}}>
                                    Cart
                                </div>
                                <div
                                    className={`${styles.elementMenu} ${activeComponent === 'shop' ? styles.active : ''}`}
                                    onClick={() => {setActiveComponent('shop')}}>
                                    Shop
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.photoBox}></div>
                </div>
            </div>
            <div>{renderActiveComponent()}</div>
        </>
    );
};