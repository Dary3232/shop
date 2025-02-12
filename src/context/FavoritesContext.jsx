import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PRODUCT_IN_FAVORITES_KEY } from '../constans/constans';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const { setLocalStorage, getLocalStorage } = useLocalStorage();
    const [productsInFavorites, setProductsInFavorites] = useState(getLocalStorage(PRODUCT_IN_FAVORITES_KEY) || []);

    const toggleFavorite = (product) => {
        const productInFavorites = productsInFavorites.find(item => item.id === product.id);
        let updatedFavorites = [];

        if (productInFavorites) {
            updatedFavorites.push(...productsInFavorites.filter(item => item.id !== product.id));
        } 
        
        if (!productInFavorites) {
            updatedFavorites.push(...productsInFavorites, product);
        }

        setProductsInFavorites(updatedFavorites);
        setLocalStorage(PRODUCT_IN_FAVORITES_KEY, updatedFavorites);
    };

    const favoritesCount = productsInFavorites.length;

    return (
        <FavoritesContext.Provider value={{ productsInFavorites, toggleFavorite, favoritesCount }}>
            {children}
        </FavoritesContext.Provider>
    );
};
