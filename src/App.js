import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import ShopifyClient from './components/ShopifyClient';
import Client from 'shopify-buy';
import Home from './views/Home';

function App() {
  // Set up Shopify client for BTB
  const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    domain: 'better-than-belts.myshopify.com'
  });

  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <ShopifyClient client={client} />
      </header>
    </div>
  );
}

library.add(faAngleDoubleDown, faStar);

export default App;
