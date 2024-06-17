import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { ContextProvider } from './contexts/Auth.context';

import './index.scss';
import { OrderProvider } from './contexts/Order.context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ContextProvider>
          <OrderProvider>
            <CategoriesProvider>
              <App />
            </CategoriesProvider>
          </OrderProvider>
        </ContextProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

