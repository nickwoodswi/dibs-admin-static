import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StaticApp from './StaticApp'
import './index.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
        {/* <StaticApp /> */}
    </BrowserRouter>, 
    document.getElementById('root'));