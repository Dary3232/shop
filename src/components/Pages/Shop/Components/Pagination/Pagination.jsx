import React, { useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';
import styles from './pagination.module.css';


export const Pagination = () => {

    const { activePage, setActivePage, pageCount } = useContext(FilterContext)

    const handleNextPage = () => {
        if (activePage < pageCount - 1) {
            setActivePage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (activePage > 0) {
            setActivePage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className={styles.pagination}>
            {pageCount > 0 && (
                <>
                    <div
                        className={`${styles.leftPaginArrow} ${activePage === 0 ? styles.disabled : ''}`}
                        onClick={handlePrevPage}
                    >
                        <img src='./icons/left-pagin-arrow.svg' alt='Left Pagin Arrow' />
                    </div>
                    <div className={styles.pages}>
                        {Array.from({ length: pageCount }, (_, index) => (
                            <div
                                key={index}
                                className={`${styles.page} ${activePage === index ? styles.active : ''}`}
                                onClick={() => setActivePage(index)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div
                        className={`${styles.rightPaginArrow} ${activePage === pageCount - 1 ? styles.disabled : ''}`}
                        onClick={handleNextPage}
                    >
                        <img src='./icons/right-pagin-arrow.svg' alt='Right Pagin Arrow' />
                    </div>
                </>
            )}
        </div>
    );
};


