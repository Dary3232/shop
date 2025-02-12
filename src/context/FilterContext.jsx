import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProductsContext } from './ProductsContext';

const itemsPerPage = 12;

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);

  const [filters, setFilters] = useState({
    categories: 'All',
    searchTerm: '',
    sort: '',
    minPrice: null,
    maxPrice: Infinity,
    colors: []
  });

  const [sortedProducts, setSortedProducts] = useState(products);
  const [activePage, setActivePage] = useState(0);

  const applyAllFilters = () => {
    let filteredProducts = [...products];

    if (filters.categories && filters.categories !== 'All') {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.includes(filters.categories)
      );
    }

    filteredProducts = filteredProducts.filter((product) => {
      const price = product.price;
      return price >= filters.minPrice && price <= filters.maxPrice;
    });

    if (filters.colors && filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter(product => filters.colors.includes(product.color.toLowerCase()));
    }

    if (filters.searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    if (filters.sort) {
      const order = filters.sort === 'ASC' ? 1 : filters.sort === 'DESC' ? -1 : 0;
      filteredProducts.sort((a, b) =>
        order === 0 ? 0 : order * a.name.localeCompare(b.name));
    }

    if (filteredProducts.length < itemsPerPage) {
      setActivePage(0);
    }

    setSortedProducts(filteredProducts);
  };

  useEffect(() => {
    applyAllFilters();
  }, [filters.searchTerm, filters.sort]); 

  const currentItems = sortedProducts.slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage);
  const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);

  const updateFilter = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        sortedProducts,
        updateFilter,
        applyAllFilters,
        currentItems,
        activePage,
        setActivePage,
        pageCount
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};


