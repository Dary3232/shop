import React, { useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './applyFilterBtn.module.css'

export const ApplyFilterBtn = () => {
    const { applyAllFilters } = useContext(FilterContext);

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={applyAllFilters}>
                    Apply Filter
                </button>
                <div className={styles.verticalLine}></div>
            </div>
        </div>
    )
} 