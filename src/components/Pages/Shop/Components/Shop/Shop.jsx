import React, { useContext } from 'react'
import { ProductsContext } from '../../../../../context/ProductsContext';
import { FilterContext } from '../../../../../context/FilterContext';
import { ProductList } from '../ProductList/ProductList';
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter';
import { PriceFilter } from '../PriceFilter/PriceFilter';
import { ColorsFilter } from '../ColorsFilter/ColorsFilter';
import { SortFilter } from '../SortFilter/SortFilter';
import { SearchFilter } from '../SearchFilter/SearchFilter';
import { ReviewedProducts } from '../ReviewedProducts/ReviewedProducts';
import { Pagination } from '../Pagination/Pagination'
import { Newsletter } from '../Newsletter/Newsletter';
import { ApplyFilterBtn } from '../ApplyFilterBtn/ApplyFilterBtn';
import styles from './shop.module.css'

export const Shop = () => {

    const { products } = useContext(ProductsContext);
    const { sortedProducts } = useContext(FilterContext);

    return (
        <>
            <div className={styles.containerShop}>
                <div className={styles.shop}>
                    <div className={styles.sidebar}>
                        <SearchFilter />
                        <CategoriesFilter />
                        <PriceFilter />
                        <ColorsFilter />
                        <ApplyFilterBtn />
                        <ReviewedProducts />
                        <div>
                            <a href='#'>
                                <img src='./images/season-sale-banner.svg' alt='Season Sale Banner' />
                            </a>
                        </div>
                    </div>
                    <div className={styles.productsWrapper}>
                        <div className={styles.sortAndCount}>
                            <div className={styles.productsCount}>
                                There are
                                <span className={styles.bold}>
                                    {products.length ? ` ${sortedProducts.length} ` : 'loading...'}
                                </span>
                                products in this category
                            </div>
                            <SortFilter />
                        </div>
                        <ProductList />
                        <Pagination />
                    </div>
                </div>
            </div>
            < Newsletter />
        </>
    );
};



