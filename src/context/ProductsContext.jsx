import { createContext } from 'react';
import data from '../products.json';

export const ProductsContext = createContext(data);

export const ProductsProvider = ({ children }) => {
    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    );
};