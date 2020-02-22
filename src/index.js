import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from '../src/contexts/AuthContext';

ReactDOM.render(
    <BrowserRouter>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);


