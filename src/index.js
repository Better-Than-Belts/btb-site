import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrismicWrapper from './prismic/PrismicWrapper'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './reducers/CartReducer';
import { saveState, loadState } from './components/LocalStorage';

const persistedState = loadState("state");

const store = createStore(cartReducer, persistedState || { "addedItems": [] });
// const store = createStore(cartReducer);

store.subscribe(() => saveState("state", store.getState()));

ReactDOM.render(<Provider store={store}><PrismicWrapper /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
