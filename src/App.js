import React from 'react';
import ShopifyClient from './components/ShopifyClient';
import Client from 'shopify-buy';

function App() {
  // Set up Shopify client for BTB
  const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    domain: 'better-than-belts.myshopify.com'
  });

  return (
    <div className="App">
      <header className="App-header">
        <ShopifyClient client={client} />
      </header>
    </div>
  );
}

export default App;
