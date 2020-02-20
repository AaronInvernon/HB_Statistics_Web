import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

ReactDOM.render(
    <BrowserRouter>
        <AuthContext>
            <App />
        </AuthContext>
    </BrowserRouter>,
    document.getElementById('root')
);


