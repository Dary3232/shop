import React, { useContext } from 'react';
import { Product } from '../Product/Product';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './productList.module.css';

export const ProductList = () => {

    const { currentItems } = useContext(FilterContext)
    return (
        <div className={styles.products}>
            {currentItems.map(product => (
                <Product key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};



