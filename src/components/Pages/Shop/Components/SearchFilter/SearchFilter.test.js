import React from 'react';
import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchFilter } from './SearchFilter';
import { FilterProvider } from '../../../../../context/FilterContext';
import { ProductsContext } from '../../../../../context/ProductsContext';
import { FilterContext } from '../../../../../context/FilterContext';
import data from '../../../../../products.json';

const mockProducts = data.products;

const getFilterContextResult = (wrapper) => {
  const { result } = renderHook(() => React.useContext(FilterContext), { wrapper });
  return result;
};

describe('Тесты компонента SearchFilter', () => {
  test('должен вызывать updateFilter при вводе текста', () => {
    const mockUpdateFilter = jest.fn();
    
    render(
      <FilterContext.Provider value={{ updateFilter: mockUpdateFilter }}>
        <SearchFilter />
      </FilterContext.Provider>
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(mockUpdateFilter).toHaveBeenCalledWith({ searchTerm: 'test' });
  });
});

describe('Тесты фильтрации товаров в FilterProvider', () => {
  const wrapper = ({ children }) => (
    <ProductsContext.Provider value={{ products: mockProducts }}>
      <FilterProvider>
        {children}
      </FilterProvider>
    </ProductsContext.Provider>
  );

  test('должен находить товары по частичному совпадению', () => {
    const result = getFilterContextResult(wrapper);

    act(() => {
      result.current.updateFilter({ searchTerm: 'blou' });
    });
    
    expect(result.current.sortedProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Blouse with insert and ruffles (2)",
        }),
      ])
    );
  });

  test('должен находить товары независимо от регистра', () => {
    const result = getFilterContextResult(wrapper);

    act(() => {
      result.current.updateFilter({ searchTerm: 't-SHIRT' });
    });
    
    expect(result.current.sortedProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Long oversized T-shirt (2)",
        }),
      ])
    );
  });

  test('должен возвращать пустой массив при отсутствии совпадений', () => {
    const result = getFilterContextResult(wrapper);

    act(() => {
      result.current.updateFilter({ searchTerm: 'xyz' });
    });
    
    expect(result.current.sortedProducts).toEqual([]);
  });

  test('должен фильтровать по нескольким критериям одновременно', () => {
    const result = getFilterContextResult(wrapper);
  
    act(() => {
      result.current.updateFilter({ 
        searchTerm: 'blouse',
        categories: 'Women'
      });
    });
    
    expect(result.current.sortedProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Blouse with insert and ruffles (2)",
          categories: ["Women"]
        }),
      ])
    );
  });
});