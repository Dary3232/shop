import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CategoriesFilter } from './CategoriesFilter';
import { FilterContext } from '../../../../../context/FilterContext';
import data from '../../../../../products.json';

const mockUpdateFilter = jest.fn();
const { products } = data;

const renderWithContext = (value) => {
    return render (
        <FilterContext.Provider value={value}>
            <CategoriesFilter />
        </FilterContext.Provider>
    );
};

describe('Тест фильтров CategoriesFilter', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('проверяет вызов функции updateFilter при клике на категорию "Men"', () => {
        const filters = { categories: 'All' };
        const { getByText } = renderWithContext({ updateFilter: mockUpdateFilter, filters });

        fireEvent.click(getByText('Men'));

        expect(mockUpdateFilter).toHaveBeenCalledWith({ categories: 'Men' });
    });

    test('проверяет, что при выбранной категорией "Men" отображаются только товары с этой категорией', () => {
        const filters = { categories: 'Men' };
        const { getByText, queryByText } = renderWithContext({ updateFilter: mockUpdateFilter, filters, products });

        products.forEach(product => {
            if (product.category === 'Men') {
                expect(getByText(product.name)).toBeInTheDocument();
            } else {
                expect(queryByText(product.name)).not.toBeInTheDocument();
            }
        });
    });

    test ('проверяет, что активный класс добавляется к категории "Men"', () => {
        const filters = { categories: 'Men' };
        const { getByText } = renderWithContext({ updateFilter: mockUpdateFilter, filters });

        const menItem = getByText('Men');
        expect(menItem).toHaveClass('active'); 
    });
});