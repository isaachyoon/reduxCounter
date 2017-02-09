import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers/index';

//let store = createStore(reducers)

ReactDOM.render(

    <App />

  , document.querySelector('.container'));