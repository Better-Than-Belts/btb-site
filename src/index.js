import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from 'shopify-buy';
import * as serviceWorker from './serviceWorker';
import dotenv from 'dotenv';

dotenv.config();

const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    domain: 'better-than-belts.myshopify.com'
});

ReactDOM.render(<App client={client} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
