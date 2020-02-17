import React from 'react';
import Hero from '../components/Home/Hero';
import PLPPreview from '../components/Home/PLPPreview';
import OurStoryPreview from '../components/Home/OurStoryPreview';
import ProductInformation from '../components/Home/ProductInformation';
import CustomerReviews from '../components/Home/CustomerReviews';
import AsSeenIn from '../components/Home/AsSeenIn';
import ReadyToShop from '../components/Home/ReadyToShop';


const Home = () => {
    return (
       <div>
           <Hero />
            <PLPPreview />
            <OurStoryPreview />
            <ProductInformation />
            <CustomerReviews />
            <AsSeenIn />
            <ReadyToShop />
       </div>
    );
};


export default Home;