import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faStar, faAngleDoubleRight, faArrowRight, faArrowLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Client from 'shopify-buy';
import PageContainer from './components/PageContainer';

function App(props) {
  //Set up Shopify client for BTB
  const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    domain: 'better-than-belts.myshopify.com'
  });

  return (
    <div className="App" >
      <header className="App-header">
        <PageContainer {...props} client={client} />
      </header>
    </div >
  );
}

library.add(faAngleDoubleDown, faStar, faAngleDoubleRight, faArrowRight, faArrowLeft, faArrowDown);

export default App;
