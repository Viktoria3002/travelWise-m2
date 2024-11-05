import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { calc } from './test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

console.log('222');
console.log(calc(5, 5));
