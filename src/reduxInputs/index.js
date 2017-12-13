
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducer from './reducers';
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <About />
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
