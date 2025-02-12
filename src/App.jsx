import React from 'react';
import { Content } from './components/Commons/Content/Content';
import { Footer } from './components/Commons/Footer/Footer';
import { ProductsProvider } from './context/ProductsContext';
import { BasketProvider } from './context/BasketContext';
import { FavoritesProvider } from './context/FavoritesContext';
import './styles/reset.css';
import './styles/commons.css';

function App() {
  return (
    <div className='App'>
      <FavoritesProvider>
        <BasketProvider>
          <ProductsProvider>
            <Content />
            <Footer />
          </ProductsProvider>
        </BasketProvider>
      </FavoritesProvider>
    </div>
  );
}

export default App;
