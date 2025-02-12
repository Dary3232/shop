import React, { useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './sortFilter.module.css'


export const SortFilter = () => {
    const { updateFilter } = useContext(FilterContext);

    const handleSortChange = (event) => {
        updateFilter({ sort: event.target.value });
    };

    return (
        <div className={styles.sort}>
            <select className={styles.input} onChange={handleSortChange}>
                <option value=''>By relevance</option>
                <option value='ASC'>ASC</option>
                <option value='DESC'>DESC</option>
            </select>
        </div>
    );
};
