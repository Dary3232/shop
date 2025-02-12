import { useCallback } from 'react';

export const useLocalStorage = () => {

    const setLocalStorage = useCallback((key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            throw new Error(e);
          }
    }, []);
  
    const getLocalStorage = useCallback ((key) => {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (e) {
        throw new Error(e);
      }
    }, []);
  
    const clearLocalStorage = useCallback((key) => {
      localStorage.removeItem(key)
    }, [])
  
    return {
      setLocalStorage,
      getLocalStorage,
      clearLocalStorage
    };
  };
  