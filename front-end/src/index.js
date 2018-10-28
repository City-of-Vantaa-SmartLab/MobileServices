import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import getStore from './store/getStore';

const store = getStore();

ReactDOM.render(
    <Provider store={store}>
        <CookiesProvider>
            <Router basename={process.env.PUBLIC_URL}>
                <App />
            </Router>
        </CookiesProvider>
    </Provider>,

    document.getElementById('root')
);

registerServiceWorker();
