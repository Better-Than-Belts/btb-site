import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import Hero from './components/Home/Hero';
import PLPPreview from './components/Home/PLPPreview';
import ReadyToShop from './components/Home/ReadyToShop';
import OurStoryPreview from './components/Home/OurStoryPreview';
import ProductInformation from './components/Home/ProductInformation';
import CustomerReviews from './components/Home/CustomerReviews';
import AsSeenIn from './components/Home/AsSeenIn';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero/>
        <PLPPreview />
        <OurStoryPreview />
        <ProductInformation />
        <CustomerReviews />
        <AsSeenIn />
        <ReadyToShop />
      </header>
    </div>
  );
}

library.add(faAngleDoubleDown, faStar);

export default App;
