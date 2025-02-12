import React, { useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './priceFilter.module.css';

export const PriceFilter = () => {
    const { filters, updateFilter } = useContext(FilterContext);

    const handleMinPriceChange = (e) => {
        const value = e.target.value === '' ? null : Number(e.target.value);
        if (value < 0) {
            updateFilter({ minPrice: null });
            e.target.value = '';
            alert("Минимальная цена не может быть отрицательной");
            return;
        }
        updateFilter({ minPrice: value });
    };

    const handleMaxPriceChange = (e) => {
        const value = e.target.value === '' ? Infinity : Number(e.target.value);
        if (value < 0) {
            updateFilter({ maxPrice: Infinity });
            e.target.value = '';
            alert("Максимальная цена не может быть отрицательной");
            return;
        }
        updateFilter({ maxPrice: value });
    };

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Price</div>
            <div className={styles.priceBar}>
                <input
                    type='number'
                    placeholder='0'
                    className={styles.input}
                    value={filters.minPrice !== null ? filters.minPrice : ''}
                    onChange={handleMinPriceChange}
                    onWheel={(e) => e.currentTarget.blur()}
                />
                <input
                    type='number'
                    placeholder='200'
                    className={styles.input}
                    value={filters.maxPrice !== Infinity ? filters.maxPrice : ''}
                    onChange={handleMaxPriceChange}
                    onWheel={(e) => e.currentTarget.blur()}
                />
            </div>
        </div>

    );
};

