import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PRODUCT_IN_BASKET_KEY } from '../constans/constans';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const [productsInBasket, setProductsInBasket] = useState(getLocalStorage(PRODUCT_IN_BASKET_KEY) || []);
    const [discountApplied, setDiscountApplied] = useState(false);

    const updateBasket = (updatedProducts) => {
        setProductsInBasket(updatedProducts);
        setLocalStorage(PRODUCT_IN_BASKET_KEY, updatedProducts);
    };

    const addToBasket = (product) => {
        const productInBasket = productsInBasket.find(item => item.id === product.id);

        if (productInBasket) {
            const updatedProducts = productsInBasket.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            updateBasket(updatedProducts);
        } 
        
        if (!productInBasket) {
            const updatedProducts = [...productsInBasket, { ...product, quantity: 1 }];
            updateBasket(updatedProducts);
        }
    };

    const removeFromBasket = (id) => {
        const updatedProducts = productsInBasket.filter(product => product.id !== id);
        updateBasket(updatedProducts);
    };

    const totalQuantity = productsInBasket.reduce((total, product) => total + product.quantity, 0);

    return (
        <BasketContext.Provider value={{
            productsInBasket,
            updateBasket,
            addToBasket,
            removeFromBasket,
            totalQuantity,
            discountApplied,
            setDiscountApplied
        }}>
            {children}
        </BasketContext.Provider>
    );
};

