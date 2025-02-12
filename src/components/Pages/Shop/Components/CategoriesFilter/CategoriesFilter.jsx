import React, { useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './categoriesFilter.module.css';

const categories = ['All', 'Men', 'Women', 'Accessories', 'New Arrivals'];

export const CategoriesFilter = () => {
    const { updateFilter, filters } = useContext(FilterContext);

    const handleCategoryClick = (category) => {
        updateFilter({ categories: category })
    };

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Categories</div>
            <ul className={styles.customList}>
                {categories.map((category) => (
                    <li key={category}
                        className={`${styles.item} ${filters.categories === category ? styles.active : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>

    );
};



