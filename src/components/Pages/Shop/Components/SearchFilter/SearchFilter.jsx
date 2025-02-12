import React, { useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './searchFilter.module.css';


export const SearchFilter = () => {
    const { updateFilter } = useContext(FilterContext);

    const handleSearchChange = (event) => {
        updateFilter({ searchTerm: event.target.value });
    };

    return (
        <div className={styles.search}>
            <label>
                <input type='text'
                    placeholder='Search'
                    className={`${styles.searchRow} ${styles.input}`}
                    onChange={handleSearchChange}
                />
                <img src='./icons/search.svg' alt='Search Icon' className={styles.searchIcon} />
            </label>
        </div>
    );
};
