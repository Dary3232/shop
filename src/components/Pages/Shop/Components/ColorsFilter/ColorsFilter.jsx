import React, { useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './colorsFilter.module.css';

const colors = ['black', 'blue', 'red', 'yellow', 'green']

export const ColorsFilter = () => {
    const { filters, updateFilter } = useContext(FilterContext);

    const handleColorChange = (event) => {

        const { value, checked } = event.target;
        const newColors = checked ? [...filters.colors, value] : filters.colors.filter(color => color !== value);

        updateFilter({ colors: newColors })
    }

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Colors</div>
            <div className={styles.colors}>
                {colors.map(color => (
                    <div key={color} className={styles.color}>
                        <input
                            type='checkbox'
                            className={styles.colorCheckbox}
                            id={color}
                            name={color}
                            value={color}
                            checked={filters.colors.includes(color)}
                            onChange={handleColorChange}
                        />
                        <label htmlFor={color} className={styles.colorName}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
