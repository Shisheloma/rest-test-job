import './index.scss';     

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App/App';
import { store } from './App/store';
  
const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer); 

root.render( 
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider> 
    // </React.StrictMode>
);