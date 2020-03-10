import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import ShopifyClient from './components/ShopifyClient';
import Client from 'shopify-buy';
import PageContainer from './components/PageContainer';

function App() {
  // Set up Shopify client for BTB
  const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    domain: 'better-than-belts.myshopify.com'
  });

  // This will be replaced by a call to the Storefront API
  const props = {
    "heroText": "Live Better",
    "ourStoryText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium.",
    "productInformationTitle": "Assembled in New York, USA",
    "productInformationText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit quas sapiente, voluptatum cum sunt?",
    "customerReview": "I love BTB so much! Their products are high quality and comfortable.",
    "customerName": "Happy Customer",
    "whySuspendersText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."
  }

  return (
    <div className="App">
      <header className="App-header">
        <PageContainer {...props} />
        {/* <ShopifyClient client={client} /> */}
      </header>
    </div>
  );
}

library.add(faAngleDoubleDown, faStar);

export default App;
