import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    <CookiesProvider>
        <Router>
            <App />
        </Router>
    </CookiesProvider>,
    document.getElementById('root'));
registerServiceWorker();
