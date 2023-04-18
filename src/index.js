import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { BrowserRouter } from 'react-router-dom';

defineElement(lottie.loadAnimation)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);


